import React from 'react'
import BaseContextProvider, {
  baseContextWrap,
  baseUseContext,
  baseWithContext
} from 'base-context-provider'

const Context = React.createContext({})

class TestContextProvider extends BaseContextProvider {
  state = {
    heat: 5,
    punishmentLevel: 10
  }

  getContextReturnValue() {
    return {
      ...this.state
    }
  }

  getContext() {
    return Context
  }
}

export const useTestContext = baseUseContext(Context)

export const withTestContext = baseWithContext(Context, 'testContextProps')

// @ts-ignore
export const wrapTestProvider = baseContextWrap(TestContextProvider)

export default TestContextProvider
