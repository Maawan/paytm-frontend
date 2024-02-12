import axios from "axios";
const api = axios.create({
    baseURL : "http://ec2-65-0-125-29.ap-south-1.compute.amazonaws.com/api/v1/"
})
export default api;