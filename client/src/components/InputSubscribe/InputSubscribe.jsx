import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import styles from './InputSubscribe.module.scss'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { memo } from 'react';

const InputSubscribe = () => {
  const { isPhone } = useDeviceWidth()

  const InputStyles = isPhone ? styles.phoneInput : styles.desktopInput;
  const ButtonStyles = isPhone ? styles.phoneButton : styles.desktopButton; 


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

export default memo(InputSubscribe)
