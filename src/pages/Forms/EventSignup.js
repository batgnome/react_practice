import { SubmitHandler, useForm } from "react-hook-form";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function EventSignup(){
    const {register, handleSubmit} = useForm();
    const onSubmit =(e)=>{
        console.log(e)
    }
    return <>
    <Header name="Event Signup"/>
    <main>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName")} name="firstName" placeholder="first Name"></input>
            <input {...register("lastName")} name="lastName" placeholder="last Name"></input>
            <input {...register("email",{
                required: true,
            })} name="email" placeholder="email"></input>

            <button type="submit">submit</button>
        </form>
    </main>
    <Footer />
    </>
}