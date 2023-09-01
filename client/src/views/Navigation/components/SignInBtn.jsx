import Button from '@/components/Button/Button.jsx'
import userIcon from '@/assets/icons/User.svg'
import { Link } from 'react-router-dom'
import { memo } from 'react'

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

export default memo(SignInBtn)
