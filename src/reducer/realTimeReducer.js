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
            return {...state, isInitialized: true}
        }
    }
})

export const { setRealTime, setIsInitialized, clearState } = realTimeSlice.actions

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
        //console.log(yellowLinesData)
        //set isInitialized to true
        dispatch(setIsInitialized(true))

    } catch (error) {
        console.error(error)
    }
}

export const yellowLines = () => async  (dispatch) => {
    try{
        const yellowLinesData = await gtfsService.getYellowLines()
        dispatch(setRealTime({ yellowLines: yellowLinesData }))
    } catch (error) {
        console.error(error)
    }
}
export const orangeLines = () => async  (dispatch) => {
    try{
        const orangeLinesData = await gtfsService.getOrangeLines()
        dispatch(setRealTime({ orangeLines: orangeLinesData }))
    } catch (error) {
        console.error(error)
    }
}
export const brownLines = () => async  (dispatch) => {
    try{
        const brownLinesData = await gtfsService.getBrownLines()
        dispatch(setRealTime({ brownLines: brownLinesData }))

    } catch (error) {
        console.error(error)
    }
}
export const sirLines = () => async  (dispatch) => {
    try{
        const sirLinesData = await gtfsService.getSirLines()
        dispatch(setRealTime({ sirLines: sirLinesData }))

    } catch (error) {
        console.error(error)
    }
}
export const greenLines = () => async  (dispatch) => {
    try{
        const greenLinesData = await gtfsService.getGreenLines()
        dispatch(setRealTime({ greenLines: greenLinesData }))
    } catch (error) {
        console.error(error)
    }
}
export const blueLines = () => async  (dispatch) => {
    try{
        const blueLinesData = await gtfsService.getBlueLines()
        dispatch(setRealTime({ blueLines: blueLinesData }))

    } catch (error) {
        console.error(error)
    }
}
export const lTrainLines = () => async  (dispatch) => {
    try{
        const lTrainLinesData = await gtfsService.getLTrainLines()
        dispatch(setRealTime({ lTrainLines: lTrainLinesData }))
        
    } catch (error) {
        console.error(error)
    }
}
export const numberLines = () => async  (dispatch) => {
    try{
        const numberLinesData = await gtfsService.getNumberLines()
        dispatch(setRealTime({ numberLines: numberLinesData }))
    } catch (error) {
        console.error(error)
    }
}

export default realTimeSlice.reducer




