import axios from 'axios';

export const openAuth = () => {
    return axios.get('/open/auth')
}
