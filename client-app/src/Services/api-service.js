import axios from "axios";

const URL = "/";

export const getAllCharacters = () => {
    const data = axios(URL + "character/getall")
        .then(response => {
            return response.data
        }).catch(err => {
            return err;
        });

    return data;
}

