import React,{useState} from 'react'
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
function Login() {

    const redirect=useNavigate();

    const [formvalue,setFormvalue]=useState({
        email:"",
        password:""
    });

    const onchange=(e)=>{
        setFormvalue({...formvalue,[e.target.name]:e.target.value});
     console.log(formvalue);
    }

    function validation(){

        var result=true;

        if(formvalue.email=="")
        {
            toast.error('Email Field is required !');
            result=false;
        }
        if(formvalue.password=="")
        {
            toast.error('Password Field is required !');
            result=false;
        }
        return result;
    }

    const onsubmit=async(e)=>{
        e.preventDefault();
        if(validation())
        {
        const res=await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);

        if(res.data.length>0)
        {
           if(res.data[0].password==formvalue.password)
           {
            if(res.data[0].status=="unblock")
            {
            localStorage.setItem('username',res.data[0].name);
            localStorage.setItem('userid',res.data[0].id);

            window.history.replaceState(null,"","/")

            toast.success('Login Success');
            redirect('/');
           }
           else
           {
            toast.error('Account is Blocked');
            return false;
           }
        }
           else
           {
            toast.error('Password is Incorrect');
            return false;
           }
        }
        else
        {
            toast.error('Email is Incorrect');
            return false;
        }
    }
    }
    return (
        <div>
            <section className="contact_section layout_padding">
                <div className="container px-0">
                    <div className="heading_container ">
                        <h2 className>
                        Login Us
                        </h2>
                    </div>
                </div>
                <div className="container container-bg">
                    <div className="row">
                       
                        <div className="col-md-12 col-lg-12 px-0">
                            <form action="" method="post">
                                
                                <div>
                                    <input type="email" value={formvalue.email} onChange={onchange} name="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="password" value={formvalue.password} onChange={onchange} name="password" placeholder="Password" />
                                </div>
                               
                                <div className="d-flex ">
                                    <button onClick={onsubmit}>
                                        Login
                                    </button>
                                    <Link to="/signup">If not register then cLick here for Signup</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Login