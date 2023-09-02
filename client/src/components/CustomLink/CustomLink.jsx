import { memo } from 'react'
import styles from './CustomLink.module.scss'
import { Link } from 'react-router-dom'

const CustomLink = ({ children, icon, iconSrc = '', to, color, onClick }) => {
  return (
    <Link href={to} className={styles.link} style={{ color }} onClick={onClick}>
      <img src={icon || iconSrc} alt="" />
      {children}
    </Link>
  )
}

export default memo(CustomLink)
