import { Link } from "react-router-dom"

const TrainStopLine = ({station, direction, lines, trainId}) => {
    return(
        <div>
            <Link to={`/${lines}/trains/${trainId}/${direction}/${station}`}>
                <span>{station}</span>
            </Link>
            
        </div>
    )
}

export default TrainStopLine