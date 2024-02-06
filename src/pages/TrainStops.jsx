import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import TrainStopList from "../components/TrainStopList"

const TrainStops = () => {

    let lines = useParams().lines
    let trainId = useParams().trainId

    const trainLine = useSelector(state => state.realTime[lines][trainId])
    const fetchDirection = (data) => {
        for(const [station, array] of Object.entries(data)){
            if(array.length> 0){
                if(array[0]!==null){
                    return array[0]
                }
            }
        }
    }
    let fetchNorthBound = fetchDirection(trainLine['N'])
    let fetchSouthBound = fetchDirection(trainLine['S'])
    
    return(
        <div>
            <h3>{trainId}</h3>
            <h4>North Bound {fetchNorthBound}</h4>
            <TrainStopList direction={'N'}/>
            <h4>South Bound {fetchSouthBound}</h4>
            <TrainStopList direction={'S'}/>
        </div>
    )
}

export default TrainStops