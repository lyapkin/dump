import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

// Image generation
export default async function Image({ params: { locale, slug } }) {
  const product = await getProduct(slug, locale);
  const imageUrl =
    product.img_urls.length > 0 ? product.img_urls[0].img_url : undefined;

  // const response = await fetch(process.env.BACK_URL + "/media/" + imageUrl);
  // const image = await response.arrayBuffer();

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={process.env.BACK_URL + "/media/" + imageUrl}
          style={{ objectFit: "contain", height: "100%", width: "100%" }}
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}

const getProduct = async (slug, locale) => {
  const response = await fetch(
    `${process.env.BACK_URL}/${locale}/api/catalog/products/${slug}/`,
    {
      next: { revalidate: 0 },
      redirect: "manual",
    }
  );
  if (response.status === 301) {
    permanentRedirect(
      getRedirectUrl(response.headers.get("Location"), locale, "/product")
    );
  }
  if (response.status === 404) {
    notFound();
  }
  if (response.ok) return await response.json();
  throw new Error(response.status + " запрос отдельного продукта не удался");
};
