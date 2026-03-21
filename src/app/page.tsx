import { SpinLoader } from "../components/SpinLoader";
import { Suspense } from "react";
import { PostsList } from "@/components/PostsList";
import { FeaturedPost } from "@/components/FeaturedPost";
import { Breaker } from "@/components/Breaker";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader className="min-h-80 mb-16" />}>
        <FeaturedPost />

        <Breaker />

        <PostsList />
      </Suspense>
    </>
  );
}
