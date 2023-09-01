import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import Row from '@/components/Row/Row.jsx'
import Col from '@/components/Col/Col.jsx'
import ArtistName from '@/views/Artist/components/ArtistName.jsx'
import ArtistStats from '@/views/Artist/components/ArtistStats.jsx'
import ArtistBio from '@/views/Artist/components/ArtistBio.jsx'
import ArtistWebLinks from '@/views/Artist/components/ArtistWebLinks.jsx'
import Container from '@/components/Container/Container.jsx'
import ArtistFollowBtn from '../components/ArtistFollowBtn.jsx'
import { memo, useContext } from 'react'
import { Context } from '@/main.jsx'

const ArtistInfo = ({ isButtonDisabled, isLoading, user = {}, follow, unfollow, isFollowed }) => {
  const { isDesktop, isPhone } = useDeviceWidth()
  const { UserStore } = useContext(Context)
  const canShowFollowBtn = UserStore.user.id !== user.id && UserStore.isAuth;

  const FollowButton = canShowFollowBtn && (
    <ArtistFollowBtn
      disabled={isButtonDisabled}
      isFollowed={isFollowed}
      follow={follow}
      unfollow={unfollow}
      isLoading={isLoading}
    />
  )

  return (
    <Container>
      <Row
        justifyContent="space-between"
        alignItems="flex-start"
        gap={100}
        padding={isPhone ? "30px 0" : "40px 0"}
      >
        <Col gap={30} width="100%">
          <ArtistName isLoading={isLoading} name={user.username} />
          {!isDesktop ? FollowButton : null}
          <ArtistStats isLoading={isLoading} user={user} />
          <ArtistBio isLoading={isLoading} bio={user.bio} />
          <ArtistWebLinks isLoading={isLoading} links={user.links} />
        </Col>
        {isDesktop ? FollowButton : null}
      </Row>
    </Container>
  )
}

export default memo(ArtistInfo)
