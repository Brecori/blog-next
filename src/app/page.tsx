import { SpinLoader } from "../components/SpinLoader";
import { Suspense } from "react";
import { PostsList } from "@/components/PostsList";

export default async function HomePage() {
  return (
    <div className="text-slate-100 bg-slate-900 min-h-screen ">
      <div className="bg-amber-500 max-w-screen-lg mx-auto p-4">
        <header>
          <h1>Teste</h1>
        </header>
        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>
        <footer>
          <p>teste</p>
        </footer>
      </div>
    </div>
  );
}
