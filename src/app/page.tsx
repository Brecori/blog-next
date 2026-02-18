import { SpinLoader } from "../components/SpinLoader";
import { Suspense } from "react";
import { PostsList } from "@/components/PostsList";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import { PostHeading } from "@/components/PostHeading";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            src={"/images/bryen_0.png"}
            width={1200}
            height={720}
            alt="Título do Post"
            priority
          />
        </Link>
        <div className="flex flex-col gap-2 sm:justify-center">
          <time className="text-slate-300 text-sm/tight" dateTime="2025-04-20">
            20/04/2025 10:00
          </time>

          <PostHeading url="#" as="h1">
            Lorem ipsum dolor sit amet.
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            blanditiis.
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p>teste</p>
      </footer>
    </Container>
  );
}
