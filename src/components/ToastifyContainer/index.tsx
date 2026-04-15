"use client";

import { FC } from "react";
import { Bounce, ToastContainer } from "react-toastify";

export const ToastifyContainer: FC = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnHover
      theme="dark"
      transition={Bounce}
    />
  );
};
