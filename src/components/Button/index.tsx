import { ComponentPropsWithRef } from "react"
import { IconType } from "react-icons"
import styles from "./index.module.scss"

type Props = {
  variant?: "text" | "default" | "outline"
  icon?: IconType
} & ComponentPropsWithRef<"button">

export default function Button({
  variant = "default",
  className = "",
  icon: Icon,
  children,
  ...props
}: Props) {
  return (
    <button
      className={` ${variant === "default" ? styles.default : ""} ${className}`}
      {...props}
    >
      {Icon && <Icon className={`text-lg ${children ? "mr-1" : ""}`} />}
      {children}
    </button>
  )
}
