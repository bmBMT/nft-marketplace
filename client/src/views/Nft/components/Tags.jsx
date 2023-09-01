import Col from '@/components/Col/Col.jsx'
import Row from '@/components/Row/Row.jsx'
import Skeleton from 'react-loading-skeleton'
import { memo } from 'react'

const Loader = () => {
  return (
    <Col gap={20}>
      <Skeleton width={135} height={25} />
      <Row gap={20} flexWrap="wrap">
        <Skeleton width={150} height={46} borderRadius={20} />
        <Skeleton width={150} height={46} borderRadius={20} />
        <Skeleton width={150} height={46} borderRadius={20} />
        <Skeleton width={150} height={46} borderRadius={20} />
        <Skeleton width={150} height={46} borderRadius={20} />
      </Row>
    </Col>
  )
}

const Tags = ({ tags = [], isLoading }) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    (tags.length > 0) && (
      <Col gap={20}>
        <h5 style={{ fontFamily: 'Space Mono', color: '#858584' }}>Tags</h5>
        <Row gap={20} flexWrap="wrap">
          {tags.map((tag, i) => <span key={i} style={{ padding: '12px 30px', borderRadius: 20, backgroundColor: '#3B3B3B' }}>{tag}</span>)}
        </Row>
      </Col>
    )
  )
}

export default memo(Tags)
