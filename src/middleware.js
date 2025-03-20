import { withRedirectsMiddleware } from "./middlewares/redirectsMiddleware";
import { withI18nRouterMiddleware } from "./middlewares/i18nMiddleware";
import { withCityMiddleware } from "./middlewares/cityMiddleware";
import { chain } from "./middlewares/chain";

export default chain([
  withRedirectsMiddleware,
  withI18nRouterMiddleware,
  withCityMiddleware,
]);

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
