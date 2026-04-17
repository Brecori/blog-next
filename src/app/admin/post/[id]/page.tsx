import { AdminPostIdTemplate } from "@/templates/Admin/AdminPostId";
import { Suspense } from "react";

type AdminPostIdPageProps = {
  params: Promise<{ id: string }>;
};

export default async function AdminPostIdPage({
  params,
}: AdminPostIdPageProps) {
  return (
    <Suspense fallback={null}>
      <AdminPostIdTemplate params={params} />
    </Suspense>
  );
}
