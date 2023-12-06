import React,{useState} from 'react'
import axios from 'axios';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const redirect=useNavigate();

    const [formvalue,setFormvalue]=useState({
        name:"",
        email:"",
        password:"",
        mobile:"",
        status:"Unblock"
    });

    const onchange=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);
    }

    function validation(){

        var result=true;
        if(formvalue.name=="")
        {
            toast.error('Name Field is required !');
            result=false;
        }
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
        if(formvalue.mobile=="")
        {
            toast.error('Mobile Field is required !');
            result=false;
        }
        return result;
    }

    const onsubmit=async(e)=>{
        e.preventDefault();
        if(validation())
        {
        const res=await axios.post(`http://localhost:3000/user`,formvalue);
        if(res.status==201)
        {
            toast.success('Registration Success !');
            setFormvalue({...formvalue,name:"",email:"",password:"",mobile:""});
            redirect('/login')
        }}
    }
    return (
        <div>
            <section className="contact_section layout_padding">
                <div className="container px-0">
                    <div className="heading_container ">
                        <h2 className>
                            Signup Us
                        </h2>
                    </div>
                </div>
                <div className="container container-bg">
                    <div className="row">
                        
                        <div className="col-md-12 col-lg-12 px-0">
                            <form action="" method="post">
                                <div>
                                    <input type="text" value={formvalue.name} onChange={onchange} name="name" placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" value={formvalue.email} onChange={onchange} name="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="password" value={formvalue.password} onChange={onchange} name="password" placeholder="Password" />
                                </div>
                                <div>
                                    <input type="number" value={formvalue.mobile} onChange={onchange} name="mobile" placeholder="Mobile" />
                                </div>
                                <div className="d-flex ">
                                    <button onClick={onsubmit}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Signup