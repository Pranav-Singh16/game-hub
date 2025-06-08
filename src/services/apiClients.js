import axios from "axios";

const apiKey = import.meta.env.VITE_RAWG_API;
const baseUrl = import.meta.env.VITE_URL;

// console.log(`apiKey: ${apiKey}, baseUrl: ${baseUrl}`);

const apiClients = axios.create({
  baseURL: baseUrl,
  params: {
    key: apiKey,
  },
});

export default apiClients;
