import { Link } from 'react-router-dom'
import styles from './NavigationLink.module.scss'
import { memo } from 'react'

const NavigationLink = ({ action, to, children, width, height, padding }) => {
  return (
    <Link onClick={action} style={{ width, height, padding }} className={styles.link} to={to}>
      {children}
    </Link>
  )
}

export default memo(NavigationLink)
