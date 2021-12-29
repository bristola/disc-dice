import { useForm } from "react-hook-form";

const PlayerForm = ({ onSubmit }) => {
    const {register, handleSubmit} = useForm();

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" {...register("name")} />
          </div>
          <div>
            <label htmlFor="discs">Number of Discs</label>
            <input id="discs" {...register("discs")} />
          </div>
          <button type="submit">Add</button>
      </form>
    );
  }
  
  export default PlayerForm;
  