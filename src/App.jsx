
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeState } from './reducer/realTimeReducer'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import TrainStops from './pages/TrainStops'
import TrainTimesList from './pages/TrainTimesList'

const App = () => {

  const dispatch = useDispatch()
  const yellowLine = useSelector(state => state.realTime)
  const isInitialized = useSelector(state => state.realTime.isInitialized)
  useEffect(() => {
    dispatch(initializeState())
  },[])

  console.log(yellowLine)

//console.log(yellowLineTest.N)
if(isInitialized){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/:lines/trains/:trainId" element={<TrainStops/>} />
        <Route path="/:lines/trains/:trainId/:direction/:station" element={<TrainTimesList />} />
      </Routes>
    </Router>

  )
}else{
  return (
    <div>
      loading...
    </div>
  )
}
}

export default App