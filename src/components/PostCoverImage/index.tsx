import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps, FC } from "react";

type PostCoverImageProps = {
  imageProps: ComponentProps<typeof Image>;
  containerClassName?: string;
};

export const PostCoverImage: FC<PostCoverImageProps> = ({
  imageProps,
  containerClassName,
}) => {
  return (
    <div
      className={clsx(
        "w-full h-full overflow-hidden rounded-2xl",
        containerClassName,
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          "w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300",
          imageProps.className,
        )}
      />
    </div>
  );
};
