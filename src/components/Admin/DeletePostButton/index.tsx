"use client";

import { deletePostAction } from "@/actions/post/delete-post-action";
import { Dialog } from "@/components/Dialog";
import { Trash2Icon } from "lucide-react";
import { FC, useState, useTransition } from "react";

type DeletePostButtonProps = {
  id: string;
  title: string;
};

export const DeletePostButton: FC<DeletePostButtonProps> = ({ id, title }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleConfirm() {
    startTransition(async () => {
      const result = await deletePostAction(id);
      alert(result);
      setShowDialog(false);
    });
  }

  async function handleClick() {
    setShowDialog(true);
  }

  return (
    <>
      <button
        className="text-red-600 cursor-pointer hover:scale-105 transition  hover:text-red-700 disabled:text-slate-600 disabled:cursor-not-allowed"
        aria-label={`Apagar post: ${title}`}
        title={`Apagar post: ${title}`}
        onClick={handleClick}
        disabled={isPending}
      >
        <Trash2Icon size={18} />
      </button>
      <Dialog
        title="Apagar Post?"
        content={`Tem certeza que deseja apagar o post: ${title}`}
        isVisible={showDialog}
        onCancel={() => {
          setShowDialog(false);
        }}
        onConfirm={handleConfirm}
        disabled={isPending}
      />
    </>
  );
};
