import axios from "axios";

const URL = "/";

export default  class ApiStoreService{
    getAllCharacters = () => {
        const data = axios.get(URL + "character/getall")
            .then(response => {
                return response.data
            }).catch(err => {
                return err;
            });
    
        return data;
    }
    
    addNewCharacter = (newCharacter) => {
        console.log("newCharacter => ", newCharacter)
        axios.post(URL + "character/", newCharacter)
            .then(responce => {
                console.log("addNewCharacter responce ", responce);
            }).catch(err => console.log(err))
    }
}
