import { fetchAPI } from "@/utils/fetch";
import { z } from "zod";

const schema = z.object({});

async function getData() {
  const data = await fetchAPI({ path: "/courses", urlParamsObject: {} });
  console.log({ data });
  // if (!data.ok) return console.error("ERROR NO OK");

  return data;
}

export default async function page() {
  const data = await getData();

  console.log({ data });

  return (
    <div className="text-blue-500">
      dile a tu otra bebe
      {JSON.stringify(data)}
    </div>
  );
}
