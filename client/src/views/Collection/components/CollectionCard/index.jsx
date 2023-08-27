import Col from '@/components/Col/Col.jsx'
import UserCardInfo from '@/components/UserCardInfo/UserCardInfo.jsx'
import ImageBackground from '@/components/ImageBackground/ImageBackground.jsx'
import Row from '@/components/Row/Row.jsx'
import Loader from './loader.jsx'

const Index = ({ name, owner = {}, nfts, isLoading }) => {

  if (isLoading){
    return <Loader />
  }

  return (
    <Col gap={15}>
      <Col gap={15}>
        <ImageBackground radius={20} height={330} img={nfts.at(0)?.img} />
        <Row gap={15}>
          <ImageBackground radius={20} height={100} img={nfts.at(1)?.img} />
          <ImageBackground radius={20} height={100} img={nfts.at(2)?.img} />
          <div style={{
            height: 100,
            backgroundColor: "#A259FF",
            borderRadius: 20,
            width: '100%',
            display: 'flex',
          }}>
            <h5 style={{ fontFamily: 'Space Mono', margin: 'auto' }}>{nfts.length - 3}</h5>
          </div>
        </Row>
      </Col>
      <Col gap={10}>
        <h5>{name}</h5>
        <UserCardInfo user={owner} />
      </Col>
    </Col>
  )
}

export default Index