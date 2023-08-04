import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const ButtonSizes = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
}

const Button = ({ width, children, filled = true, size, padding, ...props }) => {
  const classes = [styles.button, filled ? styles.filled : styles.outlined, ButtonSizes[size]].join(
    ' '
  )

  return (
    <button
      {...props}
      style={{
        width,
        padding: `0 ${padding}px`,
        opacity: props.disabled ? '0.4' : '1',
        ...props.style,
      }}
      className={classes}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  filled: PropTypes.bool,
  size: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  padding: PropTypes.number,
}

export default Button
