import { i18nRouter } from "next-i18n-router";
import i18nConfig from "../../i18nConfig";

export const withI18nRouterMiddleware = (nextMiddleware) => {
  return async (request, event, response) => {
    response = i18nRouter(request, i18nConfig);

    if (!response.ok) {
      return response;
    }
    return nextMiddleware(request, event, response);
  };
};
