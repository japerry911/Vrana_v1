import axios from 'axios';
 
export default axios.create({
    baseURL: 'https://vrana-backend-demo.herokuapp.com'
});