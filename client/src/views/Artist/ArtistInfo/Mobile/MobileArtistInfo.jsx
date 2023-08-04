import ArtistName from '../ArtistName/ArtistName'
import ArtistBio from '../ArtistBio/ArtistBio'
import Col from '@/components/Col/Col'
import ArtistFollowBtn from '../Btns/ArtistFollowBtn/ArtistFollowBtn'
import ArtistStats from '../ArtistStats/ArtistStats'
import ArtistWebLinks from '../ArtistWebLinks/ArtistWebLinks'
import { memo, useContext } from 'react'
import { Context } from '@/main'
import Container from '@/components/Container/Container'
import Skeleton from 'react-loading-skeleton'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'

const MobileArtistInfo = ({ isButtonDisabled, isLoading, user, follow, unfollow, isFollowed }) => {
  const { UserStore } = useContext(Context)
  const { isTablet } = useDeviceWidth()

  return (
    <Container>
      <Col gap={30} width="100%" padding={'30px 0'}>
        <ArtistName isLoading={isLoading} name={user.username} />
        {!isLoading ? (
          UserStore.user.id == user.id || !UserStore.isAuth ? (
            ''
          ) : (
            <ArtistFollowBtn
              disabled={isButtonDisabled}
              isFollowed={isFollowed}
              follow={follow}
              unfollow={unfollow}
            />
          )
        ) : (
          <Skeleton style={{ width: isTablet && 145 }} height={60} borderRadius={20} />
        )}
        <ArtistStats isLoading={isLoading} user={user} />
        <ArtistBio isLoading={isLoading} bio={user.bio} />
        <ArtistWebLinks
          isRender={Object.values(user.links).filter(Boolean).length > 0}
          isLoading={isLoading}
          links={user.links}
        />
      </Col>
    </Container>
  )
}

export default MobileArtistInfo
