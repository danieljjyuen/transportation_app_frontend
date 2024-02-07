import { useState, useEffect } from 'react'
const TrainTimeLine = ({time}) => {
    const [approachTime, setApproachTime ] = useState(time)

    useEffect(() => {
        if(approachTime > -10 ){
            const timer = setInterval(() => {
                setApproachTime(approachTime -1)                
            },1000)

            return () => clearInterval(timer)
        }
    },[approachTime])

    //convert seconds into minutes
    let convertedTime = Math.floor(approachTime/60)
    
    //condition render based on approachTime
    if(approachTime < -5){
        return null
    }

    return(
        <div>
            {approachTime > 60 && (
                <p>{convertedTime} minutes</p>
            )}
            {(approachTime > 0 && approachTime < 60) && (
                <p>less than a minute</p>
            )}
            {approachTime <= 0 && (
                <p>Train Approaching</p>
            )}
        </div>
    )
}

export default TrainTimeLine