import { memo } from 'react'
import styles from './CustomLink.module.scss'
import { Link } from 'react-router-dom'

const CustomLink = ({ children, icon, to, color }) => {
  return (
    <Link href={to} className={styles.link} style={{ color }}>
      <img src={icon} alt="" />
      {children}
    </Link>
  )
}

export default memo(CustomLink)
