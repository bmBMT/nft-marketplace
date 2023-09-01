import ImageBackground from '@/components/ImageBackground/ImageBackground.jsx'
import Avatar from '@/components/Avatar/Avatar.jsx'
import Container from '@/components/Container/Container.jsx'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import { memo } from 'react'

const ProfileImage = ({ isLoading, avatar, placeholder }) => {
  const { isDesktop, isTablet, isPhone } = useDeviceWidth()
  const imgHeight = isDesktop ? 450 : isTablet ? 320 : 250

  return (
    <div style={{ height: imgHeight + 50 }}>
      <ImageBackground height={imgHeight} img={placeholder} isLoading={isLoading} gradient />
      <Container height={50}>
          <Avatar
            border={true}
            radius={20}
            width={120}
            avatar={avatar}
            style={{ bottom: 70, marginLeft: isPhone && 'calc(50% - 60px)' }}
            isLoading={isLoading}
          />
      </Container>
    </div>
  )
}

export default memo(ProfileImage)
