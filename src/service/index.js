import axios from 'axios';


import { apiHeaders, unauthorizePopup } from '../constants/index';

// Base URL configuration - using backend .env reference
export let baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/';
// Production URL (commented out for development)
// export let baseUrl = 'https://dubidorzapi.devmngt.com/api/v1/';
// export let baseUrl =
//   'https://6f09-2400-adc1-4b0-bd00-f94f-d613-451e-7d1b.ngrok-free.app/api/v1/';

const api = async (path, params, method, formData) => {
  let options = {
    headers: {
      'Content-Type': apiHeaders.application_json,
    },
    method: method,
    withCredentials: true, // Enable cookies for session-based auth
    ...(params && { data: formData ? params : JSON.stringify(params) }),
  };

  console.log(baseUrl + path, options, 'options');
  return axios(baseUrl + path, options)
    .then(response => {
      return response;
    })
    .catch(async error => {
      if (error?.status == 401) {
        unauthorizePopup.current.isVisible({
          headings: 'Session Expired',
          message: error.response.data.message,
          //icons: icons.redcross,
        });
        return;
      }
      return error.response;
    });
};

export default api;