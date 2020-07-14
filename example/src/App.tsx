import React from 'react'
import {wrapTestProvider} from './TestContext'
import Button from './Button'

const App = () => {
  return <div>hello
    <Button/>
  </div>
}

export default wrapTestProvider(App)
