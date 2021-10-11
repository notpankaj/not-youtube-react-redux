import axios from 'axios'

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: "AIzaSyAUwGpAl4LdPIBGkxlEpHIwWffwKN4Ho2A",
    }
})
export default request;

