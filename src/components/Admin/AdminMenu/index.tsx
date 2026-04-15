import { FileTextIcon, HouseIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const AdminMenu: FC = () => {
  const linkClasses = "flex items-center gap-1 hover:text-slate-400 transition";

  return (
    <div className=" text-slate-100 flex gap-8">
      <a
        href="/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
      >
        <HouseIcon size={16} />
        Home
      </a>
      <Link href="/admin/post" className={linkClasses}>
        <FileTextIcon size={16} />
        Posts
      </Link>
    </div>
  );
};
