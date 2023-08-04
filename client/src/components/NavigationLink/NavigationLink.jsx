import { Link } from 'react-router-dom'
import styles from './NavigationLink.module.scss'

const NavigationLink = ({ action, to, children, width }) => {
  return (
    <Link onClick={action} style={{ width }} className={styles.link} to={to}>
      {children}
    </Link>
  )
}

export default NavigationLink
