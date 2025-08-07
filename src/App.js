import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
// import Modal from './components/Modal'
import HomePage from "./pages/HomePage"
import {LazyLoadModal} from "./pages/LazyLoad"
import Signup from "./pages/Forms/Signup"
import EventSignup from "./pages/Forms/EventSignup"
import Parent from "./pages/DataFromChild"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/EventSignup" element={<EventSignup />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/LazyLoadModal" element={<LazyLoadModal />} />
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
