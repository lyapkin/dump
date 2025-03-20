import getRedirectUrl from "@/utils/getRedirectUrl";
import handleNotExistingPage from "@/utils/handleNotExistingPage";
import { permanentRedirect } from "next/navigation";

export const BASE_URL = process.env.BACK_URL;

export default class BlogService {
  static async allArticles(locale) {
    try {
      const response = await fetch(`${BASE_URL}/${locale}/api/articles/`, {
        next: { revalidate: 60 },
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  static async getArticleContent(slug, locale) {
    const response = await fetch(
      `${BASE_URL}/${locale}/api/articles/${slug}/`,
      {
        next: { revalidate: 0 },
        redirect: "manual",
      }
    );

    if (response.status === 301) {
      permanentRedirect(
        getRedirectUrl(response.headers.get("Location"), locale, "/blog")
      );
    }
    if (response.status === 404) {
      handleNotExistingPage();
    }
    if (!response.ok) {
      throw new Error("problem fetching an article");
    }
    const data = await response.json();
    return data;
  }
}
