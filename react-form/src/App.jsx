import { useForm } from "react-hook-form";
import './App.css'

function App() {

  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
  // const onSubmit = data => console.log(data);


  async function onSubmit(data) {
    // Simulate API call with 5-second delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }
  

  return (
    <>
   <form onSubmit={handleSubmit(onSubmit)}>

    <div>
      <label>First Name</label>
      <input
        {...register("firstname", {
          required: { value: true, message: "First name is required" },
          maxLength: { value: 5, message: "Max length is 5 characters" }
        })}
      />
      {errors.firstname && <p>{errors.firstname.message}</p>}
    </div>
    <br />
    <div>
      <label>Middle Name</label>
      <input  {...register("middlename")}/>
    </div>
<br />
    <div>
      <label>Last Name</label>
      <input {...register("lastname")} />
    </div>
<br />
<input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"}/>
   </form>
    </>
  )
}

export default App
