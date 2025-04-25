import axios from "axios";
import { Image } from "./types";

const BASE_URL = "https://api.unsplash.com/search/photos";
const API_KEY = "m65ndF3IYl30TtHqwAa_2zxVBk9EVDDctDHqfKVuPhQ";

export const fetchArt = async (
  page: number,
  search: string
): Promise<Image[]> => {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      client_id: API_KEY,
      query: search,
      page: page,
      per_page: 20,
    },
  });

  return response.data.results;
};
