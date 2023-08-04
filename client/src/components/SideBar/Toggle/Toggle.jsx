import styles from './Toggle.module.scss'

const Toggle = ({ callback, state }) => {
  const btnClasses = [styles.burgerBtn, state && styles.open].join(' ')

  return (
    <div onClick={callback} className={btnClasses}>
      <span />
      <span />
    </div>
  )
}

export default Toggle
