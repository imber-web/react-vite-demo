// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
// import Theme from './theme/theme'
// import Infinite from './infinite/index'
import { observer } from 'mobx-react-lite'
import store from '@/mobxstore'
import { useEffect, useReducer } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const initialState = {
    count: 0,
    step: 1
  }

  function reducer(state: any, action: any) {
    console.log(state, action)
    const { count, step } = state
    if (action.type === 'tick') {
      return { count: count + step, step }
    } else if (action.type === 'step') {
      return { count, step: action.step }
    } else {
      throw new Error()
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const { count, step } = state

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)
    return () => clearInterval(id)
  }, []) // deps数组不需要包含step

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p> */}
        {/* <Theme /> */}
        {/* <Infinite /> */}
        <p> hello {store.data.name} </p>
        <h1>
          count:{count}, step: {step}
        </h1>
        <input
          value={step}
          onChange={(e) =>
            dispatch({ type: 'step', step: Number(e.target.value) })
          }
        />
      </header>
    </div>
  )
}

export default observer(App)
