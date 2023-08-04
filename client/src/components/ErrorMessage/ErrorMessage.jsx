import styles from './ErrorMessage.module.scss'

const ErrorMessage = ({ error }) => {
  return <span className={styles.errorMessage}>{error}</span>
}

export default ErrorMessage
