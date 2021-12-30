const PlayerCard = ({ player }) => {
  return (
    <div key={player.playerNum} className="card mt-15">
      <span><b>Player {player.playerNum}:</b> {player.name}</span>
    </div>
  )
}

export default PlayerCard;