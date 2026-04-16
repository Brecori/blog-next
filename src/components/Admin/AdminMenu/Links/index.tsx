import { FileTextIcon, HouseIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

type AdminMenuLinksProps = {
  iconSize: number;
  containerClasses?: string;
};

export const AdminMenuLinks: FC<AdminMenuLinksProps> = ({
  iconSize,
  containerClasses,
}) => {
  const linkClasses = "flex items-center gap-2 hover:text-slate-400 transition";

  return (
    <div className={`flex flex-col md:flex-row gap-4 ${containerClasses}`}>
      <Link href="/admin/post" className={linkClasses}>
        <FileTextIcon size={iconSize} />
        Posts
      </Link>
      <Link href="/admin/post/new" className={linkClasses}>
        <PlusIcon size={iconSize} />
        Criar Post
      </Link>
    </div>
  );
};
