// import { useState } from 'react'
import Root from './mobxstore'
// import logo from './logo.svg'
import './App.css'
// import Theme from './theme/theme'
// import Infinite from './infinite/index'
import { observer } from 'mobx-react-lite'
import store from '@/mobxstore'

function App() {
  // const [count, setCount] = useState(0)

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
      </header>
    </div>
  )
}

export default observer(App)
