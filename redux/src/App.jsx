import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import Reduxcounter from './Redux/Reduxcounter'

export default function App() {
  return (
    <div>
      <Provider store={store}>
    <Reduxcounter/>
      </Provider>
    </div>
  )
}
