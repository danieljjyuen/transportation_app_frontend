import gtfsService from '../services/gtfs'
import { createSlice } from '@reduxjs/toolkit'

const realTimeSlice = createSlice({
    name: 'realTime',
    initialState: {},
    reducers: {
        setRealTime(state, action){
            return {...state, ...action.payload}
        }
    }
})

export const { setRealTime } = realTimeSlice.actions

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

        dispatch(setRealTime({ yellowLines: yellowLinesData }))
        dispatch(setRealTime({ orangeLines: orangeLinesData }))
        dispatch(setRealTime({ brownLines: brownLinesData }))
        dispatch(setRealTime({ sirLines: sirLinesData }))
        dispatch(setRealTime({ greenLines: greenLinesData }))
        dispatch(setRealTime({ blueLines: blueLinesData }))
        dispatch(setRealTime({ lTrainLines: lTrainLinesData }))
        dispatch(setRealTime({ numberLines: numberLinesData }))

    } catch (error) {
        console.error(error)
    }
}

export default realTimeSlice.reducer




