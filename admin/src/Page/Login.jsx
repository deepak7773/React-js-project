import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

function Login() {

  const redirect = useNavigate();

  const [formvalue, setFormvalue] = useState({
    email: "",
    password: ""
  });

  const onchange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
    console.log(formvalue);
  }

  function validation() {

    var result = true;

    if (formvalue.email == "") {
      toast.error('Email Field is required !');
      result = false;
    }
    if (formvalue.password == "") {
      toast.error('Password Field is required !');
      result = false;
    }
    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);

      if (res.data.length > 0) {
        if (res.data[0].password == formvalue.password) {
          localStorage.setItem('username', res.data[0].name);
          localStorage.setItem('userid', res.data[0].id);

          window.history.replaceState(null,"","/dashboard")

          toast.success('Login Success');
          redirect('/dashboard');
        }
        else {
          toast.error('Password is Incorrect');
          return false;
        }
      }
      else {
        toast.error('Email is Incorrect');
        return false;
      }
    }
  }
  return (

    <div className="container-fluid" style={{ backgroundColor: "#E2E2E2", height: "100vh" }}>
      <div className="row text-center " style={{ paddingTop: 100 }}>
        <div className="col-md-12">
          <img src="assets/img/logo-invoice.png" />
        </div>
      </div>
      <div className="row ">
        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
          <div className="panel-body">
            <form role="form">
              <hr />
              <h5>Enter Details to Login</h5>
              <br />
              <div className="form-group input-group">
                <span className="input-group-addon"><i className="fa fa-tag" /></span>
                <input type="email" className="form-control" value={formvalue.email} onChange={onchange} name="email" placeholder="Enter your email " />
              </div>
              <div className="form-group input-group">
                <span className="input-group-addon"><i className="fa fa-lock" /></span>
                <input type="password" className="form-control" value={formvalue.password} onChange={onchange} name="password" placeholder="Enter Your Password" />
              </div>
              <div className="form-group">
                <label className="checkbox-inline">
                  <input type="checkbox" /> Remember me
                </label>
                <span className="pull-right">
                  <a href="index.html">Forget password ? </a>
                </span>
              </div>
              <button onClick={onsubmit}>
                Login
              </button> 
              &nbsp; &nbsp;
              <Link to="/">If not register then cLick here for Signup</Link>
              {/* <a href="index.html" className="btn btn-primary ">Login Now</a>
          <hr />
          Not register ? <a href="index.html">click here </a> or go to <a href="index.html">Home</a>  */}
            </form>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Login