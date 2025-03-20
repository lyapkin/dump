import getCurrentLanguage from "@/utils/getCurrentLanguage";
import { NextResponse } from "next/server";

export const withRedirectsMiddleware = (nextMiddleware) => {
  return async (request, event, response) => {
    if (!response) {
      response = NextResponse.next();
    }

    const path = request.nextUrl.pathname;
    const locale = getCurrentLanguage(path);

    if (path === "/" || path === `/${locale}/` || path === `/${locale}`) {
      return nextMiddleware(request, event, response);
    }

    const searchParamsPath = path.startsWith(`/${locale}`)
      ? path.slice(3)
      : path;

    const apiUrl = new URL(
      `/${locale}/api/seo/redirects/?path=${searchParamsPath}`,
      process.env.BACK_URL
    );

    const apiResponse = await fetch(apiUrl);

    if (apiResponse.ok) {
      const redirect = await apiResponse.json();
      const redirectURL = new URL(
        `/${locale}${redirect.destination}`,
        process.env.SITE_URL
      );
      return NextResponse.redirect(redirectURL, {
        status: redirect.permanent ? 308 : 307,
      });
    }

    return nextMiddleware(request, event, response);
  };
};
