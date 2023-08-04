import Col from '@/components/Col/Col'
import { Controller } from 'react-hook-form'
import Select from 'react-select'
import { avatars } from '@/utils/constants'
import colorSelectStyles from '@/utils/constants/React-Select/colorSelectStyles'
import PreviewImg from '@/components/PreviewImg/PreviewImg'

const SelectAvatar = ({ control, watch }) => {
  const img = watch('img')?.value

  return (
    <Col gap={20}>
      <Controller
        name="img"
        control={control}
        defaultValue={avatars[0]}
        render={({ field }) => <Select {...field} options={avatars} styles={colorSelectStyles} />}
      />
      <PreviewImg width={181} height={181} img={img} />
    </Col>
  )
}

export default SelectAvatar
