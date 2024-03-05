
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeState } from './reducer/realTimeReducer'
import Home from './pages/Home'
import {
  Routes, Route, Link, useLocation
} from 'react-router-dom'
import TrainStops from './pages/TrainStops'
import TrainTimesList from './pages/TrainTimesList'

const App = () => {

  const dispatch = useDispatch()

  const isInitialized = useSelector(state => state.realTime.isInitialized)
  useEffect(() => {
    dispatch(initializeState())
    
  },[])
  console.log(isInitialized)


if(isInitialized){
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/:lines/trains/:trainId" element={<TrainStops/>} />
      <Route path="/:lines/trains/:trainId/:direction/:station" element={<TrainTimesList />} />
    </Routes>
    

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