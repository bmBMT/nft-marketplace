import styles from './UserCardInfo.module.scss'
import Row from '@/components/Row/Row.jsx'
import Skeleton from 'react-loading-skeleton'
import { memo } from 'react'

const Loader = () => {
  return (
    <Row gap={12} alignItems='end'>
      <Skeleton
        width={24}
        height={24}
        borderRadius={20}
      />
      <Skeleton width={60} />
    </Row>
  )
}

const UserCardInfo = ({ user, loader = false }) => {
  if (loader){
    return <Loader />
  }

  return (
    <div className={styles.artistInfo}>
      <img className={styles.avatar} src={user.avatar} alt="avatar" />
      <span>{user.username}</span>
    </div>
  )
}

export default memo(UserCardInfo)