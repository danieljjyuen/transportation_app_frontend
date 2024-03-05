import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import TrainStopList from "../components/TrainStopList"

const TrainStops = () => {
    //fetch params from url
    let lines = useParams().lines
    let trainId = useParams().trainId

    const allTrains = useSelector(state => state.realTime.allTrainsData)
    const trainLine = allTrains.filter(trains => trains.routeId === trainId)

    const northbound = trainLine.map(train => train.N)
    const southbound = trainLine.map(train => train.S)

    const fetchDirection = (data) => {
        for(const [station, array] of Object.entries(data)){
            if(array.length> 0){
                if(array[0]!==null){
                    return array[0]
                }
            }
        }
    }
    let fetchNorthBound = fetchDirection(northbound)
    let fetchSouthBound = fetchDirection(southbound)
    
    //list all stops this trains stops at from both direction
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