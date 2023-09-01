import styles from './ErrorMessage.module.scss'
import { memo } from 'react'

const ErrorMessage = ({ error }) => {
  return <span className={styles.errorMessage}>{error}</span>
}

export default memo(ErrorMessage)
