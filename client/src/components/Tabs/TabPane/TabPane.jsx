import { memo } from 'react'
import styles from './TabPane.module.scss'

const TabPane = ({ children, padding, count }) => {
  if (count < 1) {
    return <h2 className={styles.emptyMessage}>The list is empty</h2>
  }

  return (
      <div className={styles.tabPane} style={{ padding: `${padding}px 0` }}>{children}</div>
  )
}

export default memo(TabPane)
