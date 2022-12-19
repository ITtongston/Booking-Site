import axios from "axios";

export default axios.create({
    baseURL: 'https://e-hub-forms-default-rtdb.asia-southeast1.firebasedatabase.app'
})