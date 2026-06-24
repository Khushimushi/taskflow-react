import axios from "axios";  //to comm with backend

//custom axios instance; prepends
const api = axios.create({baseURL: "http://localhost:5000/api"});

//interceptor: run this code before every req then send req
api.interceptors.request.use((config) => {
    
    //read stored jwt after login
    const token = localStorage.getItem("token");

    if (token) {

        //attaches authorization header
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;
