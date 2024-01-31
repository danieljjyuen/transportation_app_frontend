
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeState } from './reducer/realTimeReducer'

const App = () => {

  const dispatch = useDispatch()
  const yellowLine = useSelector(state => state.realTime)
  useEffect(() => {
    dispatch(initializeState())
  },[])

  console.log(yellowLine)

//console.log(yellowLineTest.N)
  return (
    <div>
      testing
    </div>
  )
}

export default App