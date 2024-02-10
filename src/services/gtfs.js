const baseUrl = import.meta.env.VITE_REACT_APP_API_URL
import axios from 'axios'

let headers = {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
}
//N, Q, R, W TRAINS
const getYellowLines = async()=> {
    const response = await axios.get(`${baseUrl}/yellowLines?_=${Date.now()}`,
    {
        headers: headers
    })
    return response.data
}

//B, D, F, M TRAINS
const getOrangeLines = async()=> {
    const response = await axios.get(`${baseUrl}/orangeLines?_=${Date.now()}`,
    {
        headers: headers
    })
    return response.data
}
//J, Z TRAINS
const getBrownLines = async()=> {
    const response = await axios.get(`${baseUrl}/brownLines?_=${Date.now()}`,
    {
        headers: headers
    })
    return response.data
}
//SI, SS sir, staten island railway
const getSirLines = async()=> {
    const response = await axios.get(`${baseUrl}/sirLines?_=${Date.now()}`,
    {
        headers: headers
    })
    return response.data
}
//G TRAIN
const getGreenLines = async()=> {
    const response = await axios.get(`${baseUrl}/greenLines?_=${Date.now()}`,)
    {
        headers: headers
    }
    return response.data
}
//A, C, E TRAIN
const getBlueLines = async()=> {
    const response = await axios.get(`${baseUrl}/blueLines?_=${Date.now()}`,
    {
        headers: headers
    })
    return response.data
}
//L TRAIN
const getLTrainLines = async()=> {
    const response = await axios.get(`${baseUrl}/ltrainLines?_=${Date.now()}`,
    {
        headers: headers
    })
    return response.data
}
//1, 2, 3, 4, 5, 6, 7 TRAINS
const getNumberLines = async()=> {
    const response = await axios.get(`${baseUrl}/numberLines?_=${Date.now()}`,
    {
        headers: headers
    })
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