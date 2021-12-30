import { useForm } from "react-hook-form";

const PlayerForm = ({ onSubmit, playerNumber }) => {
    const {register, handleSubmit} = useForm();

    return (
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Player {playerNumber}:</h4>
            <div className="row pl-6 pr-15 mt-15">
              <label className="col" htmlFor="name">Name:</label>
              <input className="col" type="text" autoComplete="off" id="name" {...register("name")} />
              <div class="w-100 mt-15"></div>
              <label className="col" htmlFor="discs">Number of Discs:</label>
              <input className="col" type="number" autoComplete="off" id="discs" {...register("discs")} />
            </div>
            <div className="d-flex justify-content-center mt-16">
              <button type="submit" className="primary width-100">Add</button>
            </div>
        </form>
      </div>
    );
  }
  
  export default PlayerForm;
  