"use client";

import { FC } from "react";

export const Header: FC = () => {
  return (
    <h1
      className="text-6xl font-bold text-blue-500 hover:text-white hover:bg-blue-500 transition duration-300"
      onClick={() => {
        console.log("asd");
      }}
    >
      Home Page
    </h1>
  );
};
