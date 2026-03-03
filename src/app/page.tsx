import { SpinLoader } from "../components/SpinLoader";
import { Suspense } from "react";
import { PostsList } from "@/components/PostsList";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostHeading } from "@/components/PostHeading";
import { PostCoverImage } from "@/components/PostCoverImage";
import { FeaturedPost } from "@/components/FeaturedPost";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <FeaturedPost />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p>teste</p>
      </footer>
    </Container>
  );
}
