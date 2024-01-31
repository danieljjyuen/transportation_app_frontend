import { configureStore } from '@reduxjs/toolkit'
import realTimeReducer from '../reducer/realTimeReducer'

const store = configureStore({
    reducer: {
        realTime: realTimeReducer,
    }
})

export default store