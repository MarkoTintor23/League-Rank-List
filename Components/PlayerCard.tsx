interface PlayerCardProps {
  player: {
    tag: string;
    region: string;
    level: number;
    profileIcon: string;
  };
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-xl border-2 border-yellow-500 shadow-lg text-center w-80">
      <img
        src={player.profileIcon}
        alt="Profile Icon"
        className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-yellow-400"
      />
      <h2 className="text-xl font-bold mb-2">{player.tag}</h2>
      <p className="text-gray-400 mb-1">Region: {player.region}</p>
      <p className="text-gray-400">Level: {player.level}</p>
    </div>
  );
}
