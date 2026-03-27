import { revalidateExampleAction } from "@/actions/revalidate-example";
import { formatHour } from "@/utils/format-datetime";

export const dynamic = "force-static";
export const revalidate = 30;

export default async function ExampleDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const hour = formatHour(Date.now());

  return (
    <main className="min-h-150 pt-32 text-4xl font-bold">
      <div>
        Hora: {hour} / Id: {id}
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
