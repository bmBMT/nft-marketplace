import Button from '@/components/Button/Button.jsx'
import plusIcon from '@/assets/icons/Plus.svg'
import checkmarkIcon from '@/assets/icons/CheckMark.png'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import Skeleton from 'react-loading-skeleton'
import { memo } from 'react'

const Loader = () => {
  return <Skeleton width={148} height={60} borderRadius={20} />
}

const ArtistFollowBtn = ({ disabled, isFollowed, follow, unfollow, isLoading }) => {
  const { isTablet } = useDeviceWidth()

  if (isLoading){
    return <Loader />
  }

  if (isFollowed) {
    return (
      <Button
        width={isTablet ? 'fit-content' : '100%'}
        disabled={disabled}
        size="secondary"
        onClick={unfollow}
        padding={30}
      >
        <img src={checkmarkIcon} alt="" />
        Unfollow
      </Button>
    )
  }
  else {
    return (
      <Button
        width={isTablet ? 'fit-content' : '100%'}
        disabled={disabled}
        filled={false}
        size="secondary"
        onClick={follow}
        padding={30}
      >
        <img src={plusIcon} alt="" />
        Follow
      </Button>
    )
  }
}

export default memo(ArtistFollowBtn)
