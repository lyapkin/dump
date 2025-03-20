import { notFound, permanentRedirect } from "next/navigation";

export default () => {
  // notFound();
  permanentRedirect("/", "replace");
};
