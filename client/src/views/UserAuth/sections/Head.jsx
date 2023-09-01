import Col from '@/components/Col/Col.jsx'
import Headline from '../components/Headline.jsx'
import Subhead from '../components/Subhead.jsx'
import { memo } from 'react'

const Head = ({ title }) => {
  return (
    <Col gap={20}>
      <Headline text={title} />
      <Subhead />
    </Col>
  )
}

export default memo(Head)
