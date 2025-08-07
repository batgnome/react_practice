import { lazy,useState,Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Modal = lazy(()=>demoDelay(import("../components/Modal")))

export function LazyLoadModal(){
    const[showModal,setShowModal] = useState(false);

    const openModal = ()=> {
        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    return <>
    <Header />
    <div>
        <button onClick={openModal}> Open Modal</button>
        <Suspense
        fallback={<div>...Loading</div>}
        >
        {showModal && <Modal onClose = {closeModal} />}
        </Suspense>
    </div>
    <Footer />
    </>
}

function demoDelay(promise) {
    return new Promise((resolve) => {
        setTimeout(resolve,2000);
    }).then(()=> promise);
}