import axios from 'axios'

const instance = axios.create({
    baseURL:"https://insta-clone-nk.herokuapp.com/"
});

export default instance;