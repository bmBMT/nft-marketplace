import Avatar from '@/components/Avatar/Avatar.jsx'
import Col from '@/components/Col/Col.jsx'
import Row from '@/components/Row/Row.jsx'
import Skeleton from 'react-loading-skeleton'
import { memo } from 'react'

const Loader = () => {
  return (
    <Col gap={10}>
      <Skeleton width={135} height={25} />
      <Row gap={12}>
        <Skeleton width={24} height={24} borderRadius={120} />
        <Skeleton width={110} height={25} />
      </Row>
    </Col>
  )
}

const Artist = ({ isLoading, artistAvatar, artistName, title }) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <Col gap={10}>
      <h5 style={{ fontFamily: 'Space Mono', color: '#858584' }}>{title}</h5>
      <Row gap={12}>
        <Avatar avatar={artistAvatar} width={24} radius={120} />
        <h5>{artistName}</h5>
      </Row>
    </Col>
  )
}

export default memo(Artist)
