import axios from "axios";

const API = axios.create({
    baseURL: "https://contactmanager-manoj-csmb.onrender.com"
});

export default API;
