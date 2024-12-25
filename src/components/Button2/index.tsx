import { ComponentPropsWithRef } from "react";
import { PropsWithChildren } from "react";
import classNames from "classnames";

type ButtonProps = { type?: string } & PropsWithChildren &
  ComponentPropsWithRef<"a">;
export default function Button2({
  type = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      href=""
      {...props}
      className={classNames(
        type === "primary"
          ? "bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500"
          : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600",
        "mt-8 inline-block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-5",
      )}
    >
      {children}
    </a>
  );
}
