import axios from '../axios'

export const register = async(data:any) => await axios({
    url: 'user/register',
    data,
    method: 'put',
})