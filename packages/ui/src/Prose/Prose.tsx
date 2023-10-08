import clsx from "clsx";
import type { ComponentPropsWithoutRef, FC } from "react";

export const Prose: FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div className={clsx(className, "prose dark:prose-invert")} {...props} />
  );
};
