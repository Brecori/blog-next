import { formatHour } from "@/utils/format-datetime";

export default async function ExamplePage() {
  const hour = formatHour(Date.now());

  return (
    <main className="min-h-150 pt-32 text-4xl font-bold">
      <div>Hora: {hour}</div>
    </main>
  );
}
