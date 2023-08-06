import Col from '@/components/Col/Col'
import Container from '@/components/Container/Container'
import Row from '@/components/Row/Row'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import MainInfo from './MainInfo/MainInfo'
import CreatedBy from './CreatedBy/CreatedBy'
import Description from './Description/Description'
import Tags from './Tags/Tags'

const NftInfo = ({ nft, creator, isLoading }) => {
  const { isDesktop, isPhone, isTablet } = useDeviceWidth()
  const contentRowGap = isDesktop ? 100 : 30
  const contentColGap = isDesktop || isTablet ? 30 : 20

  return (
    <Container justifyContent="space-between" alignItems="flex-start" padding="40px 0">
      <Row gap={contentRowGap}>
        <Col gap={contentColGap} width="100%">
          <MainInfo isLoading={isLoading} name={nft.name} created={nft.created} />
          {isPhone && <div>AUCTION TODO</div>}
          <CreatedBy
            isLoading={isLoading}
            artistAvatar={creator?.avatar}
            artistName={creator?.username}
          />
          <Description isLoading={isLoading} description={nft.description} />
          <Tags tags={nft.tags} isLoading={isLoading} />
        </Col>
        {(isDesktop || isTablet) && <div>AUCTION TODO</div>}
      </Row>
    </Container>
  )
}

export default NftInfo
