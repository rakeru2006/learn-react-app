import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
//const APIKEY = "&apikey=trilogy";
const BASEURL = "https://randomuser.me/api/?results=5&gender=female&inc=";


export default {
  search: function(query) {
    return axios.get(BASEURL + query );
  }
};