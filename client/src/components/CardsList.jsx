import { memo } from 'react'

const Loader = ({ Component }) => {
  return (
    <>
      <Component loader />
      <Component loader />
      <Component loader />
    </>
  )
}

const CardsList = ({ isLoading, Component, list, ...props }) => {
  if (isLoading) {
    return <Loader Component={Component} />
  }

  return (
    list.map((data, i) => <Component key={i} data={data} {...props} />)
  )
}

export default memo(CardsList)