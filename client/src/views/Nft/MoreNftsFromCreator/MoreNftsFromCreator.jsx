import Col from '@/components/Col/Col'
import NftCard from '@/components/NftCard/NftCard'
import Row from '@/components/Row/Row'
import TabPane from '@/components/Tabs/TabPane/TabPane'
import arrowRight from '@/assets/icons/ArrowRight.svg'
import Skeleton from 'react-loading-skeleton'
import NftSkeletonCard from '@/components/NftCard/NftSkeletonCard/NftSkeletonCard'
import Button from '@/components/Button/Button'
import Container from '@/components/Container/Container'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import { Link } from 'react-router-dom'

const MoreNftsFromCreator = ({ isLoading, nfts, creator }) => {
  const { isDesktop, isPhone } = useDeviceWidth()

  return (
    <Container justifyContent="space-between" alignItems="flex-start" padding="40px 0">
      {isPhone ? (
        <Col gap={30}>
          {isLoading ? <Skeleton height={34} width={300} /> : <h4>More from this creator</h4>}
          <TabPane>
            {isLoading ? (
              <>
                <NftSkeletonCard />
                <NftSkeletonCard />
                <NftSkeletonCard />
              </>
            ) : (
              nfts?.created.map((nft) => (
                <NftCard key={nft.id} nft={nft} user={creator} backgroundColor="#3B3B3B" />
              ))
            )}
          </TabPane>
          {!isLoading ? (
            <Link to={`/artist/${creator?.id}`}>
              <Button size="secondary" padding={50} filled={false} width="100%">
                <Row gap={12}>
                  <img src={arrowRight} alt="arrowIcon" />
                  <span>Go To Artist Page</span>
                </Row>
              </Button>
            </Link>
          ) : (
            <Skeleton width="100%" height={60} borderRadius={20} />
          )}
        </Col>
      ) : (
        <Col gap={60}>
          <Row justifyContent="space-between">
            {isLoading ? (
              <Skeleton height={34} width={300} />
            ) : isDesktop ? (
              <h3>More from this creator</h3>
            ) : (
              <h4>More from this creator</h4>
            )}
            {!isLoading ? (
              <Link to={`/artist/${creator?.id}`}>
                <Button size="secondary" padding={50} filled={false}>
                  <Row gap={12}>
                    <img src={arrowRight} alt="arrowIcon" />
                    <span>Go To Artist Page</span>
                  </Row>
                </Button>
              </Link>
            ) : (
              <Skeleton width={267} height={60} borderRadius={20} />
            )}
          </Row>
          <TabPane>
            {isLoading ? (
              <>
                <NftSkeletonCard />
                <NftSkeletonCard />
                <NftSkeletonCard />
              </>
            ) : (
              nfts?.created.map((nft) => (
                <NftCard key={nft.id} nft={nft} user={creator} backgroundColor="#3B3B3B" />
              ))
            )}
          </TabPane>
        </Col>
      )}
    </Container>
  )
}

export default MoreNftsFromCreator
