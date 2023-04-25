import {IRes} from "../components/types/respons.type";
import {urls} from "../Urls/Urls";
import {axiosInstance} from "./axios.service";
import {IUser} from "../interfaces/user.interface";

const usersService = {
    getAll:():IRes<IUser[]> => axiosInstance.get(urls.placeAPI.users),
    create:(user:IUser):IRes<IUser> => axiosInstance.post(urls.placeAPI.users)
}

export {
    usersService
}