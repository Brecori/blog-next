import { Header } from "@/components/Header";

export default async function HomePage() {
  await new Promise((r) => setTimeout(r, 1000)); // Simulate a delay for loading

  console.log("asd");

  return (
    <div>
      <Header />
    </div>
  );
}
