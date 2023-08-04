import styles from './Container.module.scss'

const Container = ({ children, ...props }) => {
  return (
    <div className={styles.container} style={{ ...props }}>
      {children}
    </div>
  )
}

export default Container
