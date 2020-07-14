import React from 'react'
import { useTestContext, withTestContext } from './TestContext'

const Button = (props: any) => {
  const {punishmentLevel} = props.testContextProps
  const { heat }: any = useTestContext()
  return (
    <div>
      heat: {heat} <br/>
      levels: {punishmentLevel}
    </div>
  )
}

export default withTestContext(Button)
