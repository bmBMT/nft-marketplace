import Col from '@/components/Col/Col'
import Row from '@/components/Row/Row'
import { Context } from '@/main'
import { useContext } from 'react'

const UserInfo = ({ onClick }) => {
  const { UserStore } = useContext(Context)
  const user = UserStore.user
  const wallet = UserStore.wallet

  return (
    <Row onClick={onClick} cursor="pointer" gap={15}>
      <img src={user.avatar} alt="avatar" className="img-45" style={{ borderRadius: 100 }} />
      <Col>
        <h5 style={{ fontSize: 18 }}>{user.username}</h5>
        <Row gap={5}>
          <label style={{ fontSize: 14 }}>Cash:</label>
          <div style={{ fontSize: 14 }}>{wallet.cash} ETH</div>
        </Row>
      </Col>
    </Row>
  )
}

export default UserInfo
