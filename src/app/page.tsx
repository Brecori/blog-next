import { SpinLoader } from "../components/SpinLoader";
import { Suspense } from "react";
import { HomeTemplate } from "@/templates/Home";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-80 mb-16" />}>
        <HomeTemplate />
      </Suspense>
    </>
  );
}
