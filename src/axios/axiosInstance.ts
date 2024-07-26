import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.ADVICE_SLIP_BASE_URL,
});

export default axiosInstance;
