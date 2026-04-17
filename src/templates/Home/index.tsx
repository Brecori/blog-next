import { Breaker } from "@/components/Breaker";
import { FeaturedPost } from "@/components/FeaturedPost";
import { HomeHero } from "@/components/HomeHero";
import { PostsList } from "@/components/PostsList";
import { FC } from "react";

export const HomeTemplate: FC = () => {
  return (
    <>
      <HomeHero />
      <FeaturedPost />
      <Breaker />
      <PostsList />
    </>
  );
};
