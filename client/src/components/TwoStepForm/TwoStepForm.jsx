import styles from './TwoStepForm.module.scss'
import Row from '../Row/Row'
import { useDeviceWidth } from '@/utils/hooks/useDeviceWidth'

const TwoStepForm = ({ firstStep, secondStep, isFirstStep }) => {
  const { isDesktop, isTablet } = useDeviceWidth()
  const maxWidth = isDesktop || isTablet ? 330 : 'none'

  return (
    <form className={styles.form} style={{ maxWidth }} noValidate>
      <div className={styles.stepIndicator}>
        <span
          className={`${styles.progress} ${isFirstStep ? styles.firstStep : styles.secondStep}`}
        />
      </div>
      <Row>
        <div className={`${styles.firstStep} ${isFirstStep ? styles.show : styles.hide}`}>
          {firstStep}
        </div>
        <div className={`${styles.secondStep} ${isFirstStep ? styles.hide : styles.show}`}>
          {secondStep}
        </div>
      </Row>
    </form>
  )
}

export default TwoStepForm
