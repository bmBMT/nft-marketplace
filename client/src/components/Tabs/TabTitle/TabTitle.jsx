import { memo, useCallback } from 'react'
import styles from './TabTitle.module.scss'
import Skeleton from 'react-loading-skeleton'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'

const TabTitle = ({ isLoading, title, count, setSelectedTab, index, isActive }) => {
  const handleOnClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  const { isPhone } = useDeviceWidth()

  return (
    <li className={`${styles.title} ${isActive ? styles.active : ''}`} onClick={handleOnClick}>
      <button className={styles.titleBtn}>
        <span>{!isLoading ? title : <Skeleton width={isPhone ? 60 : 100} height={25} />}</span>
        {count !== undefined && !isLoading ? (
          <span className={styles.count}>{count}</span>
        ) : (
          !isPhone && <Skeleton width={30} height={30} borderRadius={20} />
        )}
      </button>
    </li>
  )
}

export default memo(TabTitle)
