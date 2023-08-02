import axios from "axios";
import { getCookie } from "./cookie";

export async function getPopularTeacher() {
  const data = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/popular`);

  console.log("get", data);
  return data;
}
