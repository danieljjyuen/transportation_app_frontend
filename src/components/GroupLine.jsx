import { Link } from 'react-router-dom'

const GroupLine = ({line, trainsArray}) => {

    return (
        <div>
            {trainsArray.map((train, index) => (
                <Link key={index} to={`/${line}/trains/${train}`}>
                    <span style={{margin:'5px', padding: '5px'}}>{train}</span>
                </Link>
            ))}
        </div>
    )
}

export default GroupLine