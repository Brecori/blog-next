import { DeletePostButton } from "@/components/Admin/DeletePostButton";
import { ErrorMessage } from "@/components/ErrorMessage";
import { findAllPostAdmin } from "@/lib/post/queries/admin";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

export const AdminPostPageTemplate: FC = async () => {
  const posts = await findAllPostAdmin();

  if (posts.length === 0)
    return (
      <ErrorMessage
        contentTitle="Ops!"
        content="Ainda não há nenhuma receita intergalática. Bora criar?"
      />
    );

  return (
    <div className="py-32">
      {posts.map((post) => {
        return (
          <div
            className={clsx(
              "p-2 flex gap-2 items-center justify-between rounded",
              !post.published && "bg-slate-800",
            )}
            key={post.id}
          >
            <Link
              href={`/admin/post/${post.id}`}
              className="hover:text-slate-400 transition"
            >
              {post.title}
            </Link>
            {!post.published && (
              <span className="text-xs text-slate-300 italic">
                (Não publicado)
              </span>
            )}

            <DeletePostButton id={post.id} title={post.title} />
          </div>
        );
      })}
    </div>
  );
};
