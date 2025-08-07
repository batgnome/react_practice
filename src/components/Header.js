import Navbar from "./Navbar"

export default function Header(props) {
    return <>
    <h1>{props.name}</h1>
    <Navbar />
    </>
}