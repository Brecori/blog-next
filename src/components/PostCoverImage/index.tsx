import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps, FC } from "react";

type PostCoverImageProps = {
  imageProps: ComponentProps<typeof Image>;
  linkProps: ComponentProps<typeof Link>;
};

export const PostCoverImage: FC<PostCoverImageProps> = ({
  imageProps,
  linkProps,
}) => {
  return (
    <Link
      {...linkProps}
      className={clsx(
        "w-full h-full overflow-hidden rounded-xl",
        linkProps.className,
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300",
          imageProps.className,
        )}
      />
    </Link>
  );
};
