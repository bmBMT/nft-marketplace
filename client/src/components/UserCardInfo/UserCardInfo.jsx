import styles from './UserCardInfo.module.scss'
import Loader from '@/components/UserCardInfo/loader.jsx'

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

export default UserCardInfo