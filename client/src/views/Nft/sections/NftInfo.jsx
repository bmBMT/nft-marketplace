import Col from '@/components/Col/Col.jsx'
import Container from '@/components/Container/Container.jsx'
import Row from '@/components/Row/Row.jsx'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import MainInfo from '../components/MainInfo.jsx'
import Description from '../components/Description.jsx'
import Tags from '../components/Tags.jsx'
import Artist from '../components/Artist.jsx'
import { memo } from 'react'

const NftInfo = ({ nft, creator, owner, isLoading }) => {
  const { isDesktop, isTablet } = useDeviceWidth()
  const contentRowGap = isDesktop ? 100 : 30
  const contentColGap = isDesktop || isTablet ? 30 : 20

  return (
    <Container justifyContent="space-between" alignItems="flex-start" padding="40px 0">
      <Row gap={contentRowGap}>
        <Col gap={contentColGap} width="100%">
          <MainInfo isLoading={isLoading} name={nft.name} created={nft.createdDate} />
          {/*{isPhone && <div>AUCTION TODO</div>}*/}
          <Row gap="20px 50px" flexWrap="wrap">
            <Artist
              isLoading={isLoading}
              artistAvatar={creator?.avatar}
              artistName={creator?.username}
              title="Created By"
            />
            <Artist
              isLoading={isLoading}
              artistAvatar={owner?.avatar}
              artistName={owner?.username}
              title="Owner"
            />
          </Row>
          <Description isLoading={isLoading} description={nft.description} />
          <Tags tags={nft.tags} isLoading={isLoading} />
        </Col>
        {/*{(isDesktop || isTablet) && <div>AUCTION TODO</div>}*/}
      </Row>
    </Container>
  )
}

export default memo(NftInfo)
