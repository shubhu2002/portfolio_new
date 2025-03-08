import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://portfolionew-backend-production.up.railway.app/api/v1",
});

const open_link = (url: string) => window.open(url, "_blank");

export { apiInstance,open_link };
