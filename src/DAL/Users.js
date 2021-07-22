import ApiUrls from "../config/ApiUrls";
import axios from "axios";

const DAL = {
    getUsers: () => {
        const result = axios.get(ApiUrls.API_URL_USERS).then((resp) => {
            return resp.data;
        }).catch((e) => {
            return null;
        });
        return result;
    },
    addUser: (values) => {
        const result = axios.post(ApiUrls.API_URL_USERS, values).then(resp => {
            return resp.data;
        }).catch(error => {
            return null;
        });
        return result;
    }
}

export default DAL;