import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Component/Header'
import Home from './Pages/Home'
import Footer from './Component/Footer'
import Shop from './Pages/Shop'
import Why from "./Pages/Why";
import Testimonial from "./Pages/Testimonial";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup"
import Profile from "./Pages/Profile";


function App() {
  return (
    <BrowserRouter>
    <ToastContainer></ToastContainer>
    <Routes>
      <Route path='/' element={<> <Header/> <Home/> <Footer/> </>}> </Route>
      <Route path='/shop' element={<> <Header/> <Shop/> <Footer/> </>}> </Route>
      <Route path='/why' element={<> <Header/> <Why/> <Footer/> </>}> </Route>
      <Route path='/testimonial' element={<> <Header/> <Testimonial/> <Footer/> </>}> </Route>
      <Route path='/contact' element={<> <Header/> <Contact/> <Footer/> </>}> </Route>
      <Route path='/login' element={<> <Header/> <Login/> <Footer/> </>}> </Route>
      <Route path='/signup' element={<> <Header/> <Signup/> <Footer/> </>}> </Route>
      <Route path='/profile' element={<> <Header/> <Profile/> <Footer/> </>}> </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
