import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://portfolio-new-backend-52be.onrender.com/api/v1",
});

const open_link = (url: string) => window.open(url, "_blank");

export { apiInstance,open_link };
