import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import TrainTimeLine from "../components/TrainTimeLine"

const TrainStopList = () => {
    let direction = useParams().direction
    let trainId = useParams().trainId
    let station = useParams().station
    let lines = useParams().lines
    
    //get list of trains arriving at this specific station in seconds
    let timeTable = useSelector(state => state.realTime[lines][trainId][direction][station]).slice(1)
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