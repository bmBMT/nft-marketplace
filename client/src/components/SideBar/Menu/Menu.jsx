import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import styles from './Menu.module.scss'

const Menu = ({ callback, state, children }) => {
  const { isTablet } = useDeviceWidth()
  const menuClasses = [styles.menu, state && styles.active].join(' ')
  const minWidth = isTablet ? 350 : '100%'

  return (
    <div className={menuClasses} onClick={callback}>
      <div className={styles.blur}></div>
      <div className={styles.menuContent} onClick={(e) => e.stopPropagation()} style={{ minWidth }}>
        {children}
      </div>
    </div>
  )
}

export default Menu
