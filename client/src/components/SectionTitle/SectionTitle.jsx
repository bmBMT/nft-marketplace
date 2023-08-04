import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import styles from './SectionTitle.module.scss'
import { memo } from 'react'

const SectionTitle = ({ children }) => {
  const { isDesktop } = useDeviceWidth()

  return isDesktop ? (
    <h5 className={styles.title}>{children}</h5>
  ) : (
    <div className={styles.title}>{children}</div>
  )
}

export default memo(SectionTitle)
