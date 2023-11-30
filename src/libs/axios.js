import client from 'axios'

const axios = client.create({ baseURL: process.env.REACT_APP_API_ORIGIN_URL })



const interceptor=(req) => {
    const apiKey = process.env.REACT_APP_API_KEY
    if (apiKey) {
        req.headers.set('Authorization',`Bearer ${apiKey}`)
    }
    return req
}
axios.interceptors.request.use(interceptor)


export default axios