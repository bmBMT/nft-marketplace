import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'
import styles from './InputSubscribe.module.scss'

const InputSubscribe = () => {
  const { isPhone } = useDeviceWidth()


  return (
    <form className={styles.formSub}>
      <input className={styles.inputSub} type="text" placeholder={isPhone ? "Enter Your Email Address" : "Enter your email here"} />
      <button className={styles.buttonSub} type="submit">
       <img className={styles.imgSub} src="/src/assets/icons/EnvelopeSimple.svg" alt="user icon"/>
        <div>Subscribe</div>
        </button>
    </form>
  )
}

export default InputSubscribe
