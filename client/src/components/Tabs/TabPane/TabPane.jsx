import { memo } from 'react'
import styles from './TabPane.module.scss'

const TabPane = ({ children, padding }) => {
  return (
      <div className={styles.tabPane} style={{ padding: `${padding}px 0` }}>{children}</div>
  )
}

export default memo(TabPane)
