import Col from '@/components/Col/Col.jsx'
import UserCardInfo from '@/components/UserCardInfo/UserCardInfo.jsx'
import ImageBackground from '@/components/ImageBackground/ImageBackground.jsx'
import Row from '@/components/Row/Row.jsx'
import Skeleton from 'react-loading-skeleton'
import { memo } from 'react'

const Loader = () => {
  return (
    <Col gap={15}>
      <Col gap={15}>
        <Skeleton borderRadius={20} height={330} />
        <Row gap={15}>
          <div style={{width: '100%'}}>
            <Skeleton borderRadius={20} height={100} />
          </div>
          <div style={{width: '100%'}}>
            <Skeleton borderRadius={20} height={100} />
          </div>
          <div style={{width: '100%'}}>
            <Skeleton borderRadius={20} height={100} />
          </div>
        </Row>
      </Col>
      <Col gap={10}>
        <Skeleton width={150} height={26} />
        <UserCardInfo loader />
      </Col>
    </Col>
  )
}

const CollectionCard = ({ data = {}, loader }) => {
  if (loader){
    return <Loader />
  }

  return (
    <Col gap={15}>
      <Col gap={15}>
        <ImageBackground radius={20} height={330} img={data?.nfts.at(0)?.img} />
        <Row gap={15}>
          <ImageBackground radius={20} height={100} img={data?.nfts.at(1)?.img} />
          <ImageBackground radius={20} height={100} img={data?.nfts.at(2)?.img} />
          <div style={{
            height: 100,
            backgroundColor: "#A259FF",
            borderRadius: 20,
            width: '100%',
            display: 'flex',
          }}>
            <h5 style={{ fontFamily: 'Space Mono', margin: 'auto' }}>{data?.nfts.length - 3}</h5>
          </div>
        </Row>
      </Col>
      <Col gap={10}>
        <h5>{data.collection.name}</h5>
        <UserCardInfo user={data.collection.owner} />
      </Col>
    </Col>
  )
}

export default memo(CollectionCard)