import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className="text-center">
        <h1 className="mt-15">Welcome to Disc Dice Game</h1>
        <div className="mt-30 d-flex justify-content-center">
          <Link to="/create">
            <button className="primary">Create New Game</button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Home;
  