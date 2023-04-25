import axios from "axios";
import {userBaseURL} from "../Urls/Urls";

const axiosInstance = axios.create({baseURL:userBaseURL});

export {
    axiosInstance
}
