import { findAllPostAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import { Trash2Icon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const AdminPostPageTemplate: FC = async () => {
  const posts = await findAllPostAdmin();

  return (
    <div className="py-32 ">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              "p-2 flex gap-2 items-center justify-between",
              !post.published && "bg-slate-800",
            )}
            key={post.id}
          >
            <Link href={`/admin/post/${post.id}`}>{post.title}</Link>
            {!post.published && (
              <span className="text-xs text-slate-300 italic">
                (Não publicado)
              </span>
            )}
            <button
              className="text-red-600 cursor-pointer hover:scale-105 transition  hover:text-red-700"
              aria-label={`Apagar post: ${post.title}`}
              title={`Apagar post: ${post.title}`}
            >
              <Trash2Icon size={18} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
