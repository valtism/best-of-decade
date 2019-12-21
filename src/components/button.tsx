import React, { FC } from "react"
import classNames from "classnames"

interface ButtonProps {
  color: string
  type: ButtonType
  onClick?: () => void
  active?: boolean
  group?: boolean
}

export enum ButtonType {
  Solid,
  Outline,
  Underline,
}

export const Button: FC<ButtonProps> = ({
  color,
  type = ButtonType.Solid,
  onClick = () => {},
  active = false,
  group = false,
  children,
}) => {
  const btnClass = {
    [ButtonType.Solid]: classNames(
      "text-xs font-bold py-1 px-3 border text-white",
      !active
        ? `bg-${color}-500 hover:bg-${color}-700 border-${color}-500 hover:border-${color}-700`
        : `bg-${color}-700 border-${color}-700`,
      group ? "first:rounded-l last:rounded-r" : "rounded"
    ),
    [ButtonType.Outline]: classNames(
      "text-xs font-bold py-1 px-3 border",
      !active
        ? `bg-transparent hover:bg-${color}-500 text-${color}-700 hover:text-white border-${color}-500 hover:border-transparent`
        : `bg-${color}-500 text-white border-transparent`,
      group
        ? "first:rounded-l last:rounded-r last:border-r border-r-0"
        : "rounded"
    ),
    [ButtonType.Underline]: classNames(
      "text-xs font-bold mb-1 mt-2 mx-3 leading-normal", // We use margin instad of padding so the bottom border only underlines the text
      active ? `border-b-2 border-${color}-500` : `border-b-2 border-transparent`
    ),
  }

  return (
    <button className={btnClass[type]} onClick={onClick}>
      {children}
    </button>
  )
}
