import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import styles from './InputSubscribe.module.scss'
import Input from '../Input/Input'
import Button from '../Button/Button'

const InputSubscribe = () => {
  const { isPhone } = useDeviceWidth()

  const InputStyles = isPhone ? {color:'red', display: 'block', boxSizing: 'border-box', padding: '16px 20px 16px 20px', height: '46px', border: '0px solid $secondary-bg'} : {color:'red', display: 'block', boxSizing: 'border-box', padding: '16px 177px 16px 20px', height: '60px', border: '0px solid $secondary-bg'}
  const ButtonStyles = isPhone ? {position: 'static', boxSizing: 'border-box', border: '0px solid $btn-bg', height: '46px', padding: '0 50px'} : {position: 'absolute', boxSizing: 'border-box', top: '2px', right: '0px', border: '0px solid $btn-bg', height: '56.5px', padding: '0 50px'} 


  return (
    <form className={styles.formSub}>
      <Input style={InputStyles} type="text" placeholder={isPhone ? "Enter Your Email Address" : "Enter your email here"}/>
      <Button type="submit" style={ButtonStyles}>
        <img className={styles.imgSub} src="/src/assets/icons/EnvelopeSimple.svg" alt="letter icon"/>
        <span>Subscribe</span>
        </Button>
    </form>
  )
}

export default InputSubscribe
