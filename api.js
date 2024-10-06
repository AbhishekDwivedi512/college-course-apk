import axios from 'axios';

const API_URL = 'http://localhost:8080/api/colleges';

export const getAllColleges = () => {
    return axios.get(API_URL);
};

export const getCollegeDetails = (id) => {
    return axios.get(`${API_URL}/${id}`);
};