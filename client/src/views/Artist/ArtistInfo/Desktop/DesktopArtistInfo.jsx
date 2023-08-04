import Row from '@/components/Row/Row'
import ArtistName from '../ArtistName/ArtistName'
import ArtistBio from '../ArtistBio/ArtistBio'
import Col from '@/components/Col/Col'
import ArtistFollowBtn from '../Btns/ArtistFollowBtn/ArtistFollowBtn'
import ArtistStats from '../ArtistStats/ArtistStats'
import ArtistWebLinks from '../ArtistWebLinks/ArtistWebLinks'
import { useContext } from 'react'
import { Context } from '@/main'
import Container from '@/components/Container/Container'
import Skeleton from 'react-loading-skeleton'

const DesktopArtistInfo = ({ isButtonDisabled, isLoading, user, follow, unfollow, isFollowed }) => {
  const { UserStore } = useContext(Context)

  return (
    <Container>
      <Row justifyContent="space-between" alignItems="flex-start" gap={100} padding="40px 0">
        <Col gap={30} width="100%">
          <ArtistName isLoading={isLoading} name={user.username} />
          <ArtistStats isLoading={isLoading} user={user} />
          <ArtistBio isLoading={isLoading} bio={user.bio} />
          <ArtistWebLinks
            isRender={Object.values(user.links).filter(Boolean).length > 0}
            isLoading={isLoading}
            links={user.links}
          />
        </Col>
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
          <Skeleton width={148} height={60} borderRadius={20} />
        )}
      </Row>
    </Container>
  )
}

export default DesktopArtistInfo
