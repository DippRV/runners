import ApiUrls from "../config/ApiUrls";
import axios from "axios";

const DAL = {
    getUsers: async () => {
        const result = await axios.get(ApiUrls.API_URL_USERS).then((resp) => {
            return resp.data;
        }).catch((e) => {
            return null;
        });
        return result;
    },
    addUser: async (values) => {
        const result = await axios.post(ApiUrls.API_URL_USERS, values).then(resp => {
            return resp.data;
        }).catch(error => {
            return null;
        });
        return result;
    }
}

export default DAL;