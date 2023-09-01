import styles from './Toggle.module.scss'
import { memo } from 'react'

const Toggle = ({ callback, state }) => {
  const btnClasses = [styles.burgerBtn, state && styles.open].join(' ')

  return (
    <div onClick={callback} className={btnClasses}>
      <span />
      <span />
    </div>
  )
}

export default memo(Toggle)
