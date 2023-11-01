import React, { ChangeEvent } from 'react'
import classNames from 'classnames'

import styled from './input.module.scss'

interface Props {
  label?: string
  errorMessage?: string
  disabled?: boolean
  name?: string
  type?: string
  placeholder?: string
  id?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      label = '',
      errorMessage = '',
      disabled = false,
      name,
      type = 'text',
      placeholder,
      id,
      ...rest
    },
    ref,
  ) => {
    return (
      <div>
        {label && <label htmlFor={id} className={styled.label}>{label}</label>}
        <input
          disabled={disabled}
          type={type}
          name={name}
          placeholder={placeholder}
          {...rest}
          ref={ref}
          id={id}
          className={classNames(styled.input, {[styled['input--error']]: errorMessage})}
        />
        {errorMessage && <div className={styled.label}>{errorMessage}</div>}
      </div>
    )
  },
)

Input.displayName = 'Input'
export default React.memo(Input)