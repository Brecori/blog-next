import { SpinLoader } from "@/components/SpinLoader";
import { AdminPostTemplate } from "@/templates/Admin/AdminPost";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Post Admin",
};

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader className="min-h-screen" />}>
      <AdminPostTemplate />
    </Suspense>
  );
}
