import Col from '@/components/Col/Col.jsx'
import Row from '@/components/Row/Row.jsx'
import UserCardInfo from '@/components/UserCardInfo/UserCardInfo.jsx'
import Skeleton from 'react-loading-skeleton'

const Loader = () => {
  return (
    <Col gap={15}>
      <Col gap={15}>
        <Skeleton borderRadius={20} height={330} />
        <Row gap={15}>
          <Skeleton borderRadius={20} height={100} />
          <Skeleton borderRadius={20} height={100} />
          <Skeleton borderRadius={20} height={100} />
        </Row>
      </Col>
      <Col gap={10}>
        <Skeleton width={150} height={26} />
        <UserCardInfo loader />
      </Col>
    </Col>
  )
}

export default Loader