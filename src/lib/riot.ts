import axios from "axios";

const RIOT_APIKEY = process.env.RIOT_API_KEY;
const BASE_URL = "https://europe.api.riotgames.com";

export const riotApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-Riot-Token": RIOT_APIKEY,
  },
});
console.log("API KEY:", process.env.RIOT_API_KEY);
