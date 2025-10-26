"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PlayerCard from "../../../../Components/PlayerCard";

export default function PlayerPage() {
  const { name } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchPlayer() {
      try {
        // koristi EUNE privremeno — kasnije možeš dodati dropdown ili query param
        const res = await fetch(`/api/player/${name}/EUNE`);
        const data = await res.json();

        if (res.ok) {
          setPlayer(data);
        } else {
          setError(data.error || "Failed to fetch player");
        }
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchPlayer();
  }, [name]);

  if (loading)
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center text-white">
        Loading player info...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center text-red-400">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">
      {player && <PlayerCard player={player} />}
    </div>
  );
}
