import { forwardRef, memo, useId, useState } from 'react'
import styles from './Input.module.scss'
import eyeIcon from '@/assets/icons/Eye.svg'
import eyeSlashIcon from '@/assets/icons/EyeSlash.svg'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const Input = forwardRef((props, ref) => {
  const id = useId()
  const { icon, type, error, ...otherProps } = props
  const [_type, setType] = useState(type)

  function changePasswordVisible() {
    setType((prev) => (prev === 'password' ? 'text' : 'password'))
  }

  const inputClasses = [
    styles.input,
    icon ? styles.withIcon : '',
    type === 'password' ? styles.password : '',
    error ? styles.error : '',
  ].join(' ')

  return (
    <label className={styles.label} htmlFor={id}>
      {icon && <img className={styles.icon} src={icon} alt="" />}
      <input ref={ref} id={id} type={_type} className={inputClasses} {...otherProps} />
      <ErrorMessage error={error} />
      {type === 'password' && (
        <img
          className={styles.eye}
          onClick={changePasswordVisible}
          src={_type === 'password' ? eyeSlashIcon : eyeIcon}
          alt=""
        />
      )}
    </label>
  )
})

export default memo(Input)
