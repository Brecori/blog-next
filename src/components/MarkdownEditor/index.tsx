"use client";

import dynamic from "next/dynamic";
import { Dispatch, FC, SetStateAction, useId } from "react";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

type MarkdownEditorProps = {
  labelText?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  textAreaName: string;
  disabled?: boolean;
};

export const MarkdownEditor: FC<MarkdownEditorProps> = ({
  labelText = "",
  value,
  setValue,
  textAreaName,
  disabled = false,
}) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-2">
      {labelText && (
        <label className="text-sm" htmlFor={id}>
          {labelText}
        </label>
      )}

      <MDEditor
        className="whitespace-pre-wrap"
        value={value}
        onChange={(value) => {
          if (value === undefined) return;
          setValue(value);
        }}
        height={400}
        extraCommands={[]}
        preview="edit"
        hideToolbar={disabled}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
          remarkPlugins: [[remarkGfm]],
        }}
        textareaProps={{
          id,
          name: textAreaName,
          disabled,
        }}
      />
    </div>
  );
};
