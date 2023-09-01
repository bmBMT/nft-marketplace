import Col from '@/components/Col/Col.jsx'
import Text from '@/components/Text/Text.jsx'
import Skeleton from 'react-loading-skeleton'
import { memo } from 'react'

const Loader = () => {
  return (
    <Col gap={10}>
      <Skeleton width={340} height={50} />
      <Skeleton width={250} height={30} />
    </Col>
  )
}

const MainInfo = ({ isLoading, name, created }) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <Col gap={10}>
      <h2>{name}</h2>
      <Text color="#858584">Created on {created}</Text>
    </Col>
  )
}

export default memo(MainInfo)
