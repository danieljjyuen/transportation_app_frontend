const baseUrl = import.meta.env.VITE_REACT_APP_API_URL
import axios from 'axios'

//N, Q, R, W TRAINS
const getYellowLines = async()=> {
    const response = await axios.get(`${baseUrl}/yellowLines`)
    return response.data
}

//B, D, F, M TRAINS
const getOrangeLines = async()=> {
    const response = await axios.get(`${baseUrl}/orangeLines`)
    return response.data
}
//J, Z TRAINS
const getBrownLines = async()=> {
    const response = await axios.get(`${baseUrl}/brownLines`)
    return response.data
}
//sir, staten island railway
const getSirLines = async()=> {
    const response = await axios.get(`${baseUrl}/sirLines`)
    return response.data
}
//G TRAIN
const getGreenLines = async()=> {
    const response = await axios.get(`${baseUrl}/greenLines`)
    return response.data
}
//A, C, E TRAIN
const getBlueLines = async()=> {
    const response = await axios.get(`${baseUrl}/blueLines`)
    return response.data
}
//L TRAIN
const getLTrainLines = async()=> {
    const response = await axios.get(`${baseUrl}/ltrainLines`)
    return response.data
}
//1, 2, 3, 4, 5, 6, 7 TRAINS
const getNumberLines = async()=> {
    const response = await axios.get(`${baseUrl}/numberLines`)
    return response.data
}
export default {
    getYellowLines,
    getOrangeLines,
    getBrownLines,
    getSirLines,
    getGreenLines,
    getBlueLines,
    getLTrainLines,
    getNumberLines
}