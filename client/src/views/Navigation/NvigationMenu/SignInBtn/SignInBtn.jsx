import Button from '@/components/Button/Button'
import userIcon from '@/assets/icons/User.svg'
import { Link } from 'react-router-dom'

const SignInBtn = ({ width }) => {
  return (
    <Link to="/login" style={{width: "100%"}}>
      <Button size={'secondary'} padding={30} style={{ width }}>
        <img src={userIcon} alt="user icon" />
        <div>Sign In</div>
      </Button>
    </Link>
  )
}

export default SignInBtn
