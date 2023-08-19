import axios from "axios";

export default axios.create({
    baseURL : "https://api.rawg.io/api/",
    params: {
        key : "8ac237f06987428d961399054295b42d"
    }
})