import { useState } from "react"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
export default function Signup() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        for(let [key,value] of formData.entries()){
            console.log(key, value)
        }
        window.location.href='/'
    };
    return <>
    <Header name="Signup" />
    <main>
        <form onSubmit={handleSubmit}>
            <input name="firstname" type="text" placeholder="First Name"></input>
            <input name="lastname" type="text" placeholder="Last Name"></input>
            <input name="email" type="text" placeholder="email"></input>
            <button type="submit">submit</button>
        </form>
    </main>
    <Footer />
    </>
}