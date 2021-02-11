import axios from 'axios';
import { AsyncStorage } from 'react-native';

export default instance =  axios.create({
    baseURL: 'http://2a54984328ae.ngrok.io'
})

// instance.interceptors.request.use(
//     async (config) => {
//         const token = await AsyncStorage.getItem('token')
//         if (token){
//             config.headers.Authorization = `Bearer ${token}`
//         }
//         return config
//     },
//     (err) => {
//         return Promise.reject(err)
//     }
// )


