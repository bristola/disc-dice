import { useState } from 'react';
import { saveOptions, savePlayers } from '../../services/data.service';
import PlayerForm from './player-form/player-form';
import './create.scss'
import PlayerList from './player-list/player-list';

const Create = () => {
    const [players, setPlayers] = useState([]);
    const [options, setOptions] = useState({});
    const [showForm, setShowForm] = useState(false);

    const addPlayer = (newPlayer) => {
      setPlayers(players.concat([{playerNum: `${players.length + 1}`, ...newPlayer}]));
      setShowForm(false);
    }

    const createGame = () => {
      savePlayers(players);
      saveOptions(options);
    }

    const addPlayerClicked = () => {
      setShowForm(true);
    }

    return (
      <div className='d-flex justify-content-center'>
        <div className='create-content'>
          <h1 className='text-center'>Create New Game</h1>
          <div className='row justify-content-center'>
            <div className="mt-30 mb-30">
              <PlayerList players={players}></PlayerList>
            </div>
            <div className="mb-30">
              {showForm
                ? <PlayerForm onSubmit={addPlayer} playerNumber={players.length + 1}></PlayerForm>
                : <button className='outlined full-width' onClick={addPlayerClicked}>Add New Player</button>}
            </div>
            <button className="primary" onClick={createGame}>Create Game</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Create;
  