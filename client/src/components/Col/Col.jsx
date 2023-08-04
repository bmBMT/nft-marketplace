import styles from './Col.module.scss'

const Col = ({ children, classes = '', onClick, ...props }) => {
  return (
    <div onClick={onClick} style={{ ...props }} className={`${styles.col} ${classes}`}>
      {children}
    </div>
  )
}

export default Col
