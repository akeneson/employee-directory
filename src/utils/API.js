import axios from "axios";

export default {
    getEmployees: function(){
        // grabs 10 from US
        return axios.get("https://randomuser.me/api/?results=10&nat=us");
    }
};