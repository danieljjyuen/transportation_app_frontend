const baseUrl = import.meta.env.VITE_REACT_APP_API_URL
import axios from 'axios'


const getTest = async()=> {
    const response = await axios.get(`${baseUrl}/yellowLines`)
    console.log(response.data)
}


export default {
    getTest
}