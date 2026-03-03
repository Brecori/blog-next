import { FC } from "react";
import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export const FeaturedPost: FC = () => {
  const postLink = `/postsasd`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group cursor-pointer">
      <PostCoverImage
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "image",
          priority: true,
        }}
        linkProps={{
          href: "#",
        }}
      />
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
  );
};
