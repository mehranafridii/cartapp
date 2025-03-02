import axios from "axios";

export const API_URL = "http://localhost:3000/";

export const getItems = async (endpoint) => {
  const response = await axios.get(API_URL + endpoint);
  return response.data;
};

export const addItem = async (endpoint, item) => {
  return axios.post(API_URL + endpoint, item);
};
