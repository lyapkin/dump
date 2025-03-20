import { NOCITY_PLACEHOLDER } from "@/config/cityConfig";
import { NextRequest, NextResponse } from "next/server";

export const withCityMiddleware = (nextMiddleware) => {
  return async (request, event, response) => {
    const regexp =
      /^(\/(ru|en|tr|zh))?(\/(?!ru\/|en\/|tr\/|zh\/)(\w+(-+\w+)*))?\/(catalog|tag|product)\//i;
    const isCatalog = regexp.test(request.nextUrl.pathname);
    if (!isCatalog) {
      return nextMiddleware(request, event, response);
    }

    let defaultCity = false;

    let pathname = request.nextUrl.pathname.replace(
      /^(?:\/(ru|en|tr|zh))?\/(catalog|tag|product)\//i,
      (match, locale, pageType) => {
        defaultCity = true;
        locale = locale || "ru";
        return `/${locale}/${NOCITY_PLACEHOLDER}/${pageType}/`;
      }
    );

    if (defaultCity) {
      response = NextResponse.rewrite(new URL(pathname, request.url), response);
      return nextMiddleware(request, event, response);
    }

    const userAgent = request.headers.get("user-agent") || "";
    const bot = [/bot/i, /spider/i].some((pattern) => pattern.test(userAgent));
    if (bot) {
      return nextMiddleware(request, event, response);
    }

    let city;
    pathname = request.nextUrl.pathname.replace(
      /^(\/(?:ru|en|tr|zh))?\/(?!ru\/|en\/|tr\/|zh\/)(\w+(?:-+\w+)*)\/(catalog|tag|product)\//i,
      (match, localeSegment, citySlug, pageType) => {
        city = citySlug;
        localeSegment = localeSegment || "";
        return `${localeSegment}/${pageType}/`;
      }
    );
    const newUrl = new URL(pathname + request.nextUrl.search, request.url);
    newUrl.searchParams.set("utm_source", city);
    newUrl.searchParams.set("utm_campaign", "struktura-po-gorodam");
    return NextResponse.redirect(newUrl, { status: 307 });
  };
};
