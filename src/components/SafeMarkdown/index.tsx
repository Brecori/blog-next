import { FC } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

type SafeMarkdownProps = {
  markdown: string;
};

export const SafeMarkdown: FC<SafeMarkdownProps> = ({ markdown }) => {
  return (
    <div className="prose prose-slate prose-invert w-full max-w-none overflow-hidden prose-headings:text-zinc-100 prose-p:text-zinc-200 prose-strong:text-white prose-li:text-zinc-200 prose-blockquote:text-zinc-300 prose-blockquote:border-l-zinc-500 prose-code:text-amber-300 prose-pre:bg-zinc-900 prose-pre:text-zinc-100 prose-th:text-zinc-100 prose-td:text-zinc-200 prose-a:transition prose-a:no-underline prose-a:text-sky-300 prose-a:hover:text-sky-200 prose-a:hover:underline prose-img:mx-auto md:prose-lg">
      <ReactMarkdown
        rehypePlugins={[rehypeSanitize]}
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ node, ...props }) => {
            if (!node?.children) return "";

            return (
              <div className="overflow-x-auto">
                <table {...props} className="w-full min-w-150" />
              </div>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};
