const baseUrl = import.meta.env.VITE_REACT_APP_API_URL
import axios from 'axios'

let headers = {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0',
}
//get all trains
const getAllTrains = async()=> {
    const response = await axios.get(`${baseUrl}/allTrains?_=${Date.now()}`,
    {
        headers: headers
    })
    return response.data
}

export default {
    getAllTrains
}