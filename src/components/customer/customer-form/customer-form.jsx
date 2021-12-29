import { useForm } from "react-hook-form";

const CustomerForm = ({ onSubmit }) => {
    const {register, handleSubmit} = useForm();

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" {...register("firstName")} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" {...register("lastName")} />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input id="age" {...register("age")} />
          </div>
          <button type="submit">Add Customer</button>
      </form>
    );
  }
  
  export default CustomerForm;
  