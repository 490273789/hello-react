import type { ComponentPropsWithRef } from "react";

import type { IconType } from "react-icons";

type Props = {
  variant?: "text" | "default" | "outline";
  icon?: IconType;
} & ComponentPropsWithRef<"button">;

const getVariantClasses = (variant: Props["variant"]) => {
  switch (variant) {
    case "text":
      return "text-blue-600 hover:text-blue-800 hover:bg-blue-50 active:bg-blue-100 border-transparent";
    case "outline":
      return "text-blue-600 border-blue-400 hover:bg-blue-50 hover:border-blue-600 active:bg-blue-100 active:border-blue-700";
    case "default":
    default:
      return "text-black border-blue-400 bg-gradient-to-r from-blue-400 to-cyan-400 bg-[length:5%_100%] bg-no-repeat hover:text-white hover:bg-[length:100%_100%] active:from-cyan-400 active:to-blue-400 active:bg-[length:100%_100%] active:border-cyan-300";
  }
};

export default function Button({
  variant = "default",
  className = "",
  icon: Icon,
  children,
  ...props
}: Props) {
  const baseClasses =
    "inline-block py-1 px-3 mr-2 mt-2 text-center border rounded-md cursor-pointer select-none transition-all duration-200";
  const variantClasses = getVariantClasses(variant);

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {Icon && <Icon className={`text-lg ${children ? "mr-1" : ""}`} />}
      {children}
    </button>
  );
}
