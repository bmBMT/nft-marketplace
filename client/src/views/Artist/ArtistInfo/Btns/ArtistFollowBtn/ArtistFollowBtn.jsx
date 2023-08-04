import Button from '@/components/Button/Button'
import plusIcon from '@/assets/icons/Plus.svg'
import checkmarkIcon from '@/assets/icons/CheckMark.png'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'

const ArtistFollowBtn = ({ disabled, isFollowed, follow, unfollow }) => {
  const { isTablet } = useDeviceWidth()

  return isFollowed ? (
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
  ) : (
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

export default ArtistFollowBtn
