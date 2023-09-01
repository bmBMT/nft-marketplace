import Col from '@/components/Col/Col.jsx'
import Text from '@/components/Text/Text.jsx'
import Skeleton from 'react-loading-skeleton'
import { memo } from 'react'

const Loader = () => {
  return (
    <Col gap={10}>
      <Skeleton width={135} height={25} />
      <Text>
        <Skeleton count={5} />
      </Text>
    </Col>
  )
}

const Description = ({ isLoading, description }) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <Col gap={10}>
      <h5 style={{ fontFamily: 'Space Mono', color: '#858584' }}>Description</h5>
      <Text>{description}</Text>
    </Col>
  )
}

export default memo(Description)
