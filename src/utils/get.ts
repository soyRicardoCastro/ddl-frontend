import qs from "qs";
import { z } from "zod";
import { API_URL } from "./fetch";

const query = qs.stringify(
  {
    fields: ["nombre", "descripcion", "precio"],
    populate: {
      banner: {
        fields: ["name", "url"],
      },
      trailler: {
        fields: ["name", "url"],
      },
    },
  },
  {
    encodeValuesOnly: true,
  }
);

export async function getCourses() {
  const courses = await fetch(`${API_URL}/courses`);

  return courses.json();
}

const courseSchema = z.object({
  data: z.array(
    z.object({
      id: z.number(),
      attributes: z.object({
        nombre: z.string(),
        description: z.string(),
        precio: z.number(),
      }),
    })
  ),
  meta: z.object({
    pagination: z.object({
      page: z.number(),
      pageSize: z.number(),
      pageCount: z.number(),
      total: z.number(),
    }),
  }),
});

export type CourseType = z.infer<typeof courseSchema>;
