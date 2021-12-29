import { useEffect, useState } from 'react';

const Create = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Some effect
    }, []);

    const addPlayer = (newPlayer) => {
      
    }

    const createGame = (newCustomer) => {
      // Some function
    }

    return (
      <div>
        <h1 className='text-center'>Create New Game</h1>
        <div className='d-flex justify-content-center'>
          <button className="primary">Create Game</button>
        </div>
      </div>
    );
  }
  
  export default Create;
  