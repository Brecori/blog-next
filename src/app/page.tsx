import { SpinLoader } from "../components/SpinLoader";
import { Suspense } from "react";
import { PostsList } from "@/components/PostsList";
import { FeaturedPost } from "@/components/FeaturedPost";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <FeaturedPost />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
    </>
  );
}
