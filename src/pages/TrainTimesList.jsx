import { useParams, useLocation } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import TrainTimeLine from "../components/TrainTimeLine"
import { useEffect } from 'react'

const TrainStopList = () => {
    let direction = useParams().direction
    let trainId = useParams().trainId
    let station = useParams().station
    //let lines = useParams().lines

    const dispatch = useDispatch()
    const location = useLocation()
    let timeTable = useSelector(state => state.realTime.allTrainsData).filter(train => train.routeId === trainId).map(train => train[direction][station])[0].slice(1)
    
    //dynamically dispatches to fetch from the correct api feed

    //get list of trains arriving at this specific station in seconds

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