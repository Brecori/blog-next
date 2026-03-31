import { FC } from "react";

type AdminPostIdPageProps = {
  params: Promise<{ id: string }>;
};
export const AdminPostIdTemplate: FC<AdminPostIdPageProps> = async ({
  params,
}) => {
  const { id } = await params;

  return <div className="py-32 text-6xl">Admin Post Id Page: {id}</div>;
};
