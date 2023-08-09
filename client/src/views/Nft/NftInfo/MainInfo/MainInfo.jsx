import Col from '@/components/Col/Col'
import Text from '@/components/Text/Text'
import Skeleton from 'react-loading-skeleton'

const MainInfo = ({ isLoading, name, created }) => {
  return (
    <Col gap={10}>
      {isLoading ? <Skeleton width={340} height={50} /> : <h2>{name}</h2>}
      {isLoading ? <Skeleton width={250} height={30} /> : <Text color="#858584">Created on {created}</Text>}
    </Col>
  )
}

export default MainInfo
