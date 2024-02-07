import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import TrainStopLine from "./TrainStopLine"

const TrainStopList = ({direction}) => {
    let lines = useParams().lines
    let trainId = useParams().trainId
  
    let trainStops = useSelector(state => state.realTime[lines][trainId][direction])

    let stationList = Object.keys(trainStops)
    //map out all the train stops this train will be stopping at
    return(
        <div>
            {stationList.length > 0 ? (
                stationList.map(stop => (
                    <TrainStopLine key={`${lines}/${trainId}/${direction}/${stop}`} 
                    station={stop} direction={direction} lines={lines} trainId={trainId}/>
                ))
            ): (
                <p> not available </p>
            )}
        </div>
    )
}

export default TrainStopList