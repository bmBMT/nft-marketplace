import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import DesktopArtistInfo from './Desktop/DesktopArtistInfo'
import MobileArtistInfo from './Mobile/MobileArtistInfo'

const ArtistInfo = ({ isButtonDisabled, isLoading, user, follow, unfollow, isFollowed }) => {
  const { isDesktop } = useDeviceWidth()

  const props = {
    isButtonDisabled,
    isLoading,
    user,
    follow,
    unfollow,
    isFollowed,
  }

  return isDesktop ? <DesktopArtistInfo {...props} /> : <MobileArtistInfo {...props} />
}

export default ArtistInfo
