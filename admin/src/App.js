import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from "./Page/Login"
import Header from './Component/Header'
import Footer from "./Component/Footer"
import Dashboard from "./Page/Dashboard"
import Add_Products from './Page/Add_Products'
import Manage_user from "./Page/Manage_user"
import Edit_user from "./Page/Edit_user"
import Manage_categories from './Page/Manage_categories'
import Manage_Products from './Page/Manage_Products'
import Add_admin from './Page/Add_admin'
import Manage_admin from './Page/Manage_admin'
import Add_categories from './Page/Add_categories'
import Manage_contact from './Page/Manage_contact'
// import Login from './Page/Login'

function App() {
  return (
    <BrowserRouter> 
    <ToastContainer></ToastContainer>
    <Routes>
        <Route path='/' element={<><Login/></>}></Route>
      
        <Route path='/dashboard' element={<><Header/><Dashboard/><Footer/></>}></Route>
        <Route path='/add_categories' element={<><Header/><Add_categories/><Footer/></>}></Route>
        <Route path='/add_Products' element={<><Header/><Add_Products/><Footer/></>}></Route>
        <Route path='/manage_categories' element={<><Header/><Manage_categories/><Footer/></>}></Route>
        {/* <Route path='/login' element={<><Header/><Login/><Footer/></>}></Route> */}

        {/* <Route path='/manage_Product' element={<><Header/> <Manage_Products/> <Footer/></>}></Route> */}
        <Route path='/manage_Products' element={<> <Header/> <Manage_Products/> <Footer/> </>}></Route>
        
        <Route path='/manage_user' element={<><Header/><Manage_user/><Footer/></>}></Route>
        <Route path='/edit_user/:id' element={<><Header/><Edit_user/><Footer/></>}></Route>
                
        <Route path='/add_admin' element={<><Header/><Add_admin/><Footer/></>}></Route>
        <Route path='/manage_admin' element={<><Header/><Manage_admin/><Footer/></>}></Route>
        <Route path='/manage_contact' element={<><Header/><Manage_contact/><Footer/></>}></Route>


    </Routes>
    </BrowserRouter>
  )
}

export default App