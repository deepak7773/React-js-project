import React,{useState} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';



function Contact() {
    const [formvalue,setFormvalue]=useState({
        name:"",
        email:"",
        mobile:"",
        msg:"",
    });
    const onchange=(e)=>{
        setFormvalue({...formvalue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
        console.log(formvalue);

    }
    function validation(){

        var result=true;
        if(formvalue.name=="")
        {
            toast.error('Name Field is Required ');
            result=false;
        }
        if(formvalue.email=="")
        {
            toast.error('Email Field is Required ');
            result=false;
        }
        if(formvalue.mobile=="")
        {
            toast.error('mobile Field is Required ');
            result=false;
        }
        if(formvalue.msg=="")
        {
            toast.error('Messagess Field is Required ');
            result=false;
        }
        return result;
    }

    const submitvalue = async (e) =>{
        e.preventDefault();
        if(validation())
        {
            const res=await axios.post(`http://localhost:3000/contact`,formvalue);
            if(res.status==201)
            {
                toast.success('Register succesfully');
                setFormvalue({...formvalue,name:"",email:"",mobile:"",msg:""})
            }
        }
    }
    return (
        <div>
            <section className="contact_section layout_padding">
                <div className="container px-0">
                    <div className="heading_container ">
                        <h2 className>
                            Contact Us
                        </h2>
                    </div>
                </div>
                <div className="container container-bg">
                    <div className="row">
                        <div className="col-lg-7 col-md-6 px-0">
                            <div className="map_container">
                                <div className="map-responsive">
                                    <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={300} frameBorder={0} style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-5 px-0">
                            <form action="" method='post'>
                                <div>
                                    <input type="text" value={formvalue.name} onChange={onchange} name='name' placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" value={formvalue.email} onChange={onchange} name='email' placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" value={formvalue.mobile}  onChange={onchange} name='mobile' placeholder="Phone" />
                                </div>
                                <div>
                                    <input type="text"value={formvalue.msg}  onChange={onchange} name='msg' className="message-box" placeholder="Message" />
                                </div>
                                <div className="d-flex ">
                                    <button onClick={submitvalue}>
                                        SEND
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

export default Contact