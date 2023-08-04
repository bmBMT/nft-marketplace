import { memo } from 'react'
import styles from './TabPane.module.scss'

const TabPane = ({ children }) => {
  return (
      <div className={styles.tabPane}>{children}</div>
  )
}

export default memo(TabPane)
