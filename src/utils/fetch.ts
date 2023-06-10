import { env } from "../env.mjs";

export const API_URL = env.NEXT_PUBLIC_STRAPI_API_URL;

import qs from "qs";
import { getStrapiURL } from "./api-helper";

interface Props {
  path: string;
  urlParamsObject?: Object;
  options?: Object;
}

export async function fetchAPI({
  path,
  urlParamsObject = {},
  options = {},
}: Props) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
      ...options,
    };

    const queryString = qs.stringify(urlParamsObject);
    console.log(getStrapiURL());
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
      ...options,
    }).then((res) => res.json());

    return response;
  } catch (error) {
    console.error({ error });
  }
}
