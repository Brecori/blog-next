"use client";

import { FC, ReactNode } from "react";

type ErrorMessageProps = {
  pageTitle?: string;
  contentTitle: string;
  content: ReactNode;
};

export const ErrorMessage: FC<ErrorMessageProps> = ({
  content,
  contentTitle,
  pageTitle,
}) => {
  return (
    <>
      {pageTitle && <title>{pageTitle}</title>}
      <div className="min-h-100 bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center text-center">
        <div>
          <h1 className="text-7xl/tight mb-4 font-bold">{contentTitle}</h1>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
};
