import { env } from "@/env.mjs";

export const getStrapiURL = (path = "") =>
  `${env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${path}`;

export const getStrapiMedia = (url?: string) =>
  url !== undefined
    ? url.startsWith("http") || url?.startsWith("//")
      ? url
      : `${getStrapiURL}${url}`
    : null;

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const delay = (time: number) =>
  new Promise((resolve) => setTimeout(() => resolve(1), time));
