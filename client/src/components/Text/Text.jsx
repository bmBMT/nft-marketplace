import { memo } from 'react'
import styles from './Text.module.scss'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'

const Text = ({ children, color }) => {
  const { isDesktop } = useDeviceWidth()

  return (
    <div style={{ color }} className={isDesktop ? styles.desktop : styles.mobile}>
      {children}
    </div>
  )
}

export default memo(Text)
