import { useParams, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import TrainTimeLine from "../components/TrainTimeLine"
import {
    yellowLines,
    orangeLines,
    brownLines,
    sirLines,
    greenLines,
    blueLines,
    lTrainLines,
    numberLines,
} from '../reducer/realTimeReducer'
import { useEffect } from 'react'

const TrainStopList = () => {
    const actionMapping = {
        yellowLines,
        orangeLines,
        brownLines,
        sirLines,
        greenLines,
        blueLines,
        lTrainLines,
        numberLines,
    }
    let direction = useParams().direction
    let trainId = useParams().trainId
    let station = useParams().station
    let lines = useParams().lines
    
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        //dynamically dispatches to fetch from the correct api feed
        dispatch(actionMapping[lines]())
    },[location.pathname])
      console.log(location)
    //get list of trains arriving at this specific station in seconds
    let timeTable = useSelector(state => state.realTime[lines][trainId][direction][station]).slice(1)

    console.log(timeTable)
    let bound = direction === 'N' ? 'North Bound' : 'South Bound'
    return (
        <div>
            <h3>{station} {bound} {trainId} Train </h3>
            {timeTable.map((time, index) => (
                <TrainTimeLine key={index} time={time}/>
            ))}
        </div>
    )
}

export default TrainStopList