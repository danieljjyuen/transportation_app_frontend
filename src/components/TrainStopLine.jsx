import { Link } from "react-router-dom"

const TrainStopLine = ({station, direction, lines, trainId}) => {
    //each individual train stop links to list of time 
    //this train will be approaching on this station
    return(
        <div>
            <Link to={`/${lines}/trains/${trainId}/${direction}/${station}`}>
                <span>{station}</span>
            </Link>
            
        </div>
    )
}

export default TrainStopLine