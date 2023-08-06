import Col from '@/components/Col/Col'
import Text from '@/components/Text/Text'
import Skeleton from 'react-loading-skeleton'

const Description = ({ isLoading, description }) => {
  return (
    <Col gap={10}>
      {isLoading ? (
        <Skeleton width={135} height={25} />
      ) : (
        <h5 style={{ fontFamily: 'Space Mono', color: '#858584' }}>Description</h5>
      )}
      {isLoading ? (
        <Text>
          <Skeleton count={5} />
        </Text>
      ) : (
        <Text>{description}</Text>
      )}
    </Col>
  )
}

export default Description
