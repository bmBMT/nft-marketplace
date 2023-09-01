import Col from '@/components/Col/Col.jsx'
import CollectionName from '@/views/Collection/components/CollectionName.jsx'
import Avatar from '@/components/Avatar/Avatar.jsx'
import Skeleton from 'react-loading-skeleton'
import Row from '@/components/Row/Row.jsx'
import { memo } from 'react'

const CollectionInfo = ({ title, owner, isLoading }) => {
    return (
      <Col paddingTop={60} gap={10}>
        <CollectionName title={title} isLoading={isLoading} />
        <Row gap={12} alignItems='center'>
          <Avatar width={40} avatar={owner?.avatar} radius={50} isLoading={isLoading} />
          {
            isLoading ?
              <Skeleton style={{ position: 'relative', top: 5 }} width={100} /> :
              <h5>{owner?.username}</h5>
          }
        </Row>
      </Col>
    )
}

export default memo(CollectionInfo)