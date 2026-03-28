import { revalidateExampleAction } from "@/actions/revalidate-example";
import { formatHour } from "@/utils/format-datetime";

// export const dynamic = "force-static";
// export const revalidate = 30;

export default async function ExampleDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(Date.now());

  const response = await fetch("https://randomuser.me/api/?results=1", {
    next: {
      tags: ["randomuser"],
      revalidate: 10,
    },
  });

  const json = await response.json();

  const name = json.results[0].name.first;

  console.log(json.results[0].name.first);

  return (
    <main className="min-h-150 pt-32 text-4xl font-bold">
      <div>
        Name: {name} / Hora: {hour} / Id: {id}
      </div>

      <form action={revalidateExampleAction} className="py-16">
        <input type="hidden" name="path" defaultValue={`/exemplo/${id}`} />

        <button
          className="bg-amber-500 text-white p-4 rounded hover:bg-amber-600 transition cursor-pointer"
          type="submit"
        >
          REVALIDATE
        </button>
      </form>
    </main>
  );
}
