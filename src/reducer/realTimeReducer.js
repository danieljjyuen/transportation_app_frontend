import gtfsService from '../services/gtfs'
import { createSlice } from '@reduxjs/toolkit'

const realTimeSlice = createSlice({
    name: 'realTime',
    initialState: {
        isInitialized:false,
        allTrainsData: null,
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
        const allTrainsData = await gtfsService.getAllTrains()

        //set data fetched from api
        dispatch(setRealTime({ allTrainsData: allTrainsData }))

        //set isInitialized to true
        dispatch(setIsInitialized(true))

        // Start polling
        const pollingFunction = async () => {
            const updatedData = await gtfsService.getAllTrains();
            dispatch(setRealTime({ allTrainsData: updatedData }));
        };

        const pollingInterval = setInterval(pollingFunction, 30000);
    } catch (error) {
        console.error(error)
    }
}

export default realTimeSlice.reducer




