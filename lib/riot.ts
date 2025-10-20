import axios from "axios";

const RIOT_APIKEY = process.env.RIOT_API_KEY;
const BASE_URL = "https://eun1.api.riotgames.com";

const riotApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-Riot-Token": RIOT_APIKEY,
  },
});
