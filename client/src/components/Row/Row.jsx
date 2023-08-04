import styles from './Row.module.scss'

const Row = ({ children, onClick, ...props }) => {
  return (
    <div onClick={onClick} style={{ ...props }} className={styles.row}>
      {children}
    </div>
  )
}

export default Row
