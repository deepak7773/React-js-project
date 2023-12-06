import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function Edit_user() {
    const redirect = useNavigate();
    useEffect(() => {
        editdata();
    }, []);

    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    });

    const { id } = useParams();

    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        setFormvalue(res.data);
    }
    const onchange = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value});
        console.log(formvalue);
    }

    function validation() {

        var result = true;
        if (formvalue.name == "") {
            toast.error('Name Field is required !');
            result = false;
        }
        if (formvalue.email == "") {
            toast.error('Email Field is required !');
            result = false;
        }
        if (formvalue.password == "") {
            toast.error('Password Field is required !');
            result = false;
        }
        if (formvalue.mobile == "") {
            toast.error('Mobile Field is required !');
            result = false;
        }
        return result;
    }

    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/user/${id}`, formvalue);
            if (res.status == 200) 
            {
                setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "" });
                toast.success('update Success !');
                return redirect('/manage_user');
            }
        }
    }


    return (
        <div id="page-wrapper">
        <div id="page-inner">
          <div classname="row">
        <div classname="col-md-12">
          <h1 classname="page-head-line">Edit User</h1>
         
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="panel panel-info">
            <div className="panel-heading">
             Edituser
            </div>
            <div className="panel-body">
              <form role="form">
                <div className="form-group">
                  <label>Enter Name</label>
                  <input className="form-control" type="text" name='name' onChange={onchange} value={formvalue.name} /> 
                </div>
                <div className="form-group">
                  <label>Enter Email</label>
                  <input className="form-control" type="email" name='email' onChange={onchange} value={formvalue.email} />
                </div>
                <div className="form-group">
                  <label>Enter Password</label>
                  <input className="form-control" type="password" name='password' onChange={onchange} value={formvalue.password} />
                </div>
                <div className="form-group">
                  <label>Enter Mobile</label>
                  <input className="form-control" type="number" name='mobile' onChange={onchange} value={formvalue.mobile} />
                </div>
                
                <button type="submit" className="btn btn-info" onClick={onsubmit} >Submit </button>
              </form>
            </div>
          </div>
        </div>
      
      </div>
    
    </div>
    
    </div>
    )
}

export default Edit_user