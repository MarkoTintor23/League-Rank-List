import { NextResponse } from "next/server";
import { riotApi } from "@/lib/riot";
import axios from "axios";

interface Params {
  params: {
    gameName: string;
    tagLine: string;
  };
}

export async function GET(req: Request, context: Params) {
  const { gameName, tagLine } = context.params;

  try {
    const accountRes = await riotApi.get(
      `/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(
        gameName
      )}/${encodeURIComponent(tagLine)}`
    );

    const { puuid } = accountRes.data;

    const summonerRes = await axios.get(
      `https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
      {
        headers: {
          "X-Riot-Token": process.env.RIOT_API_KEY,
        },
      }
    );

    const { name, summonerLevel, profileIconId } = summonerRes.data;

    // 3️⃣ Generišemo link do profilne ikonice preko Data Dragon
    const profileIconUrl = `https://ddragon.leagueoflegends.com/cdn/14.3.1/img/profileicon/${profileIconId}.png`;

    // 4️⃣ Vraćamo kompletan JSON
    return NextResponse.json({
      name,
      tag: tagLine,
      region: "EUNE",
      level: summonerLevel,
      profileIcon: profileIconUrl,
    });
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    return NextResponse.json(
      { error: "Failed to fetch player data" },
      { status: error.response?.status || 500 }
    );
  }
}
