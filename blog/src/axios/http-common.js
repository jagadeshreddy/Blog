import axios from "axios";

export default axios.create({
    baseURL:"https://localhost:8081/blog",
    headers:{
        "Content-type":"application/json"
    }
})