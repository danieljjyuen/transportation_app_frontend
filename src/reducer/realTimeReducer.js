import gtfsService from '../services/gtfs'
import { createSlice } from '@reduxjs/toolkit'

const realTimeSlice = createSlice({
    name: 'realTime',
    initialState: {
        isInitialized:false
    },
    reducers: {
        setRealTime(state, action){
            return {...state, ...action.payload}
        },
        setIsInitialized(state, action){
            return {...state, isInitialized:true}
        }
    }
})

export const { setRealTime, setIsInitialized } = realTimeSlice.actions

export const initializeState = () => async (dispatch) => {
    try{
        //fetch from api
        const yellowLinesData = await gtfsService.getYellowLines()
        const orangeLinesData = await gtfsService.getOrangeLines()
        const brownLinesData = await gtfsService.getBrownLines()
        const sirLinesData = await gtfsService.getSirLines()
        const greenLinesData = await gtfsService.getGreenLines()
        const blueLinesData = await gtfsService.getBlueLines()
        const lTrainLinesData = await gtfsService.getLTrainLines()
        const numberLinesData = await gtfsService.getNumberLines()

        //set data fetched from api
        dispatch(setRealTime({ yellowLines: yellowLinesData }))
        dispatch(setRealTime({ orangeLines: orangeLinesData }))
        dispatch(setRealTime({ brownLines: brownLinesData }))
        dispatch(setRealTime({ sirLines: sirLinesData }))
        dispatch(setRealTime({ greenLines: greenLinesData }))
        dispatch(setRealTime({ blueLines: blueLinesData }))
        dispatch(setRealTime({ lTrainLines: lTrainLinesData }))
        dispatch(setRealTime({ numberLines: numberLinesData }))
        
        //set isInitialized to true
        dispatch(setIsInitialized())

    } catch (error) {
        console.error(error)
    }
}

export default realTimeSlice.reducer




