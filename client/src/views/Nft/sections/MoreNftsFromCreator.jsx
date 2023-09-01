import Col from '@/components/Col/Col.jsx'
import NftCard from '@/views/Nft/components/NftCard/NftCard.jsx'
import Row from '@/components/Row/Row.jsx'
import TabPane from '@/components/Tabs/TabPane/TabPane.jsx'
import Container from '@/components/Container/Container.jsx'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth.js'
import { memo } from 'react'
import AnotherNftsTitle from '@/views/Nft/components/AnotherNftsTitle.jsx'
import LinkToCreator from '@/views/Nft/components/LinkToCreator.jsx'
import CardsList from '@/components/CardsList.jsx'

const MoreNftsFromCreator = ({ isLoading, nfts = [], creator = {} }) => {
  const { isPhone } = useDeviceWidth()
  const colGap = isPhone ? 30 : 60;

  return (
    <Container justifyContent="space-between" alignItems="flex-start" padding="40px 0">
      <Col gap={colGap}>
        <Row justifyContent="space-between">
          <AnotherNftsTitle isLoading={isLoading} />
          {!isPhone && <LinkToCreator isLoading={isLoading} link={`/artist/${creator.id}`} />}
        </Row>
        <TabPane>
          <CardsList Component={NftCard} list={nfts} isLoading={isLoading} backgroundColor="#3B3B3B" />
          </TabPane>
        {isPhone && <LinkToCreator isLoading={isLoading} link={`/artist/${creator.id}`} />}
      </Col>
    </Container>
  )
}

export default memo(MoreNftsFromCreator)
