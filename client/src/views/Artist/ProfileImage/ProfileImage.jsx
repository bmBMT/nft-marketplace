import ImageBackground from '@/components/ImageBackground/ImageBackground'
import Avatar from '@/components/Avatar/Avatar'
import Container from '@/components/Container/Container'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import Skeleton from 'react-loading-skeleton'
import { memo } from 'react'

const ProfileImage = ({ isLoading, avatar, placeholder }) => {
  const { isDesktop, isTablet, isPhone } = useDeviceWidth()
  const imgHeight = isDesktop ? 450 : isTablet ? 320 : 250

  return (
    <div style={{ height: imgHeight + 70 }}>
      {!isLoading ? (
        <ImageBackground height={imgHeight} img={placeholder} />
      ) : (
        <Skeleton baseColor="#232323" height={imgHeight} />
      )}
      <Container height={70}>
        {!isLoading ? (
          <Avatar
            border={true}
            radius={20}
            width={120}
            avatar={avatar}
            position="relative"
            bottom={50}
            margin={isPhone && 'auto'}
          />
        ) : (
          <Skeleton
            height={120}
            width={120}
            style={{ bottom: 50, marginLeft: isPhone && 'calc(50% - 60px)' }}
            borderRadius={20}
          />
        )}
      </Container>
    </div>
  )
}

export default memo(ProfileImage)
