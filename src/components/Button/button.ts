import React, { createElement, MouseEvent } from 'react'
import classNames from 'classnames'

import styled from './button.module.scss'

interface Props {
  tag?: 'button' | 'a'
  children?: React.ReactNode
  classes?: string
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  disabled?: boolean
}

function Button({tag = 'button', children, classes, onClick, disabled}: Props) {
  return createElement(
    tag,
    {
      className: classNames(styled.button, classes),
      onClick,
      disabled
    },
    children
  )
}

export default Button