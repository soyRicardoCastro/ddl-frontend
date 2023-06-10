import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_STRAPI_API_URL: z.string().url(),
    NEXT_PUBLIC_STRAPI_API_TOKEN: z.string(),
    NEXT_PUBLIC_PAGE_LIMIT: z
      .string()
      .transform((s) => parseInt(s, 10))
      .pipe(z.number()),
  },
  runtimeEnv: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
    NEXT_PUBLIC_STRAPI_API_TOKEN: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
    NEXT_PUBLIC_PAGE_LIMIT: process.env.NEXT_PUBLIC_PAGE_LIMIT,
  },
});
