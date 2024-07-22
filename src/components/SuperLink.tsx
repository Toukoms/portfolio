import Link, { LinkProps } from "next/link";
import React from "react";
import { Button } from "./ui/button";

export const SuperLink = ({
  href,
  target,
  children,
  ...props
}: React.PropsWithChildren<LinkProps & { target?: string }>) => {
  return (
    <Button
      variant={"link"}
      className="inline p-0 focus-visible:ring-0 focus-visible:rounded-none focus-visible:inline focus-visible:border-b-2 border-primary"
      asChild
    >
      <Link {...props} href={href} target={target}>
        {children}
      </Link>
    </Button>
  );
};
