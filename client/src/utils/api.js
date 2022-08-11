import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((req) => {
  req.headers.authorization =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjI3YjY5OTE5NGJlMGU2ODA0ZTFjYSIsImZpcnN0TmFtZSI6IlZpa2EiLCJsYXN0TmFtZSI6IkRvcm9zaGVua28iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NjAwNTg2ODQsImV4cCI6MTY2MDA5NDY4NH0.mtKydPGctdr5gtEOUXBbQbAa5G0WayLMrRVb7VvShc8";
  return req;
});

export const fetchSlides = async () => {
  const response = await API.get("/slides");
  const { data } = response;
  return data;
};
