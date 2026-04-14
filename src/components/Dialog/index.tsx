"use client";

import { FC, ReactNode } from "react";

type DialogProps = {
  isVisible?: boolean;
  title: string;
  content: ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
  disabled?: boolean;
};

export const Dialog: FC<DialogProps> = ({
  title,
  content,
  onCancel,
  onConfirm,
  isVisible = false,
  disabled = false,
}) => {
  if (!isVisible) return null;

  function handleCancel() {
    if (disabled) return;

    onCancel();
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 z-5 backdrop-blur-xs flex items-center justify-center"
      onClick={handleCancel}
    >
      <div
        className="bg-slate-700 p-6 rounded-lg max-w-4xl mx-6 flex flex-col gap-6 shadow-lg shadow-black/30 text-center isolate"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3 id="dialog-title" className="text-xl font-bold">
          {title}
        </h3>
        <div id="dialog-content">{content}</div>
        <div className="flex items-center justify-around">
          <button
            className="bg-slate-200 text-slate-950 hover:bg-slate-300 transition flex items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
            autoFocus
            onClick={handleCancel}
            disabled={disabled}
          >
            Cancelar
          </button>
          <button
            className="bg-blue-500 text-blue-100 hover:bg-blue-600 transition flex items-center justify-center gap-2 px-4 py-2 rounded-lg cursor-pointer disabled:bg-slate-200 disabled:text-slate-400  disabled:cursor-not-allowed"
            onClick={onConfirm}
            disabled={disabled}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
