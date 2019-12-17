import React, { FC } from "react"
import classNames from "classnames"

interface ButtonProps {
  color: string
  onClick?: () => void
  active?: boolean
  group?: boolean
}

const Button: FC<ButtonProps> = ({
  color,
  onClick = () => {},
  active = false,
  group = false,
  children,
}) => {
  const btnClass = classNames(
    "text-white text-xs font-bold py-1 px-3",
    active
      ? `bg-${color}-700 hover:bg-${color}-800`
      : `bg-${color}-500 hover:bg-${color}-700 `,
    group ? "first:rounded-l last:rounded-r" : "rounded"
  )

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
