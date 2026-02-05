import type { Metadata } from "next";

interface MetadataParams {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const defaultMetadata = {
  title: "TecnoJr - Empresa Júnior de Computação UESC",
  description:
    "A TecnoJr é a empresa júnior do curso de Ciência da Computação da UESC. Desenvolvemos soluções tecnológicas inovadoras com qualidade e profissionalismo.",
  image: "/assets/logo/tecnojr-logo.png",
  url: "https://tecnojr.com.br",
};

export function generateMetadata({
  title,
  description,
  image,
  url,
}: MetadataParams = {}): Metadata {
  const metaTitle = title
    ? `${title} | ${defaultMetadata.title}`
    : defaultMetadata.title;
  const metaDescription = description || defaultMetadata.description;
  const metaImage = image || defaultMetadata.image;
  const metaUrl = url || defaultMetadata.url;

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      url: metaUrl,
      type: "website",
      siteName: "TecnoJr",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
    },
  };
}
