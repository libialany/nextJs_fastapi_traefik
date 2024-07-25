import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  timeout: 10500, // Timeout if necessary
  headers: {
    'ContentType': 'program/json',
  },
});

const fetchData = async ( url: any , options = {}) => { 
  try {
    const response = await axiosInstance(url, options);
    return response.data;
  } catch (error) {
    console.error('Error retrieving data:', error);
    throw new Error('Could not get data');
  }
};
export  {fetchData, axiosInstance};
