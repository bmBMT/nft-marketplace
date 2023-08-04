import Col from '@/components/Col/Col'
import Headline from './Headline/Headline'
import Subhead from './Subhead/Subhead'

const Header = ({ text }) => {
  return (
    <Col gap={20}>
      <Headline text={text} />
      <Subhead />
    </Col>
  )
}

export default Header
