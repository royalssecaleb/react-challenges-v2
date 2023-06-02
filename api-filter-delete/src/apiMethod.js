import axios from 'axios';
const base_url = 'https://reqres.in/api/users?page=2';
export const getUsers = async() => {
    const result = await axios.get(base_url);
    return result.data.data;
};

export const deleteUsers = () => {

};