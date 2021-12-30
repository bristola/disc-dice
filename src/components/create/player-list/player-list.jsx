import PlayerCard from "../player-card/player-card";

const PlayerList = ({ players }) => {
  return (
    <div>
      <h4 className="text-center">{players.length > 0 ? 'Current Players:' : 'No players have been added yet'}</h4>
      { players.map(player => <PlayerCard key={player.playerNum} player={player}></PlayerCard>) }
    </div>
  )
}

export default PlayerList;