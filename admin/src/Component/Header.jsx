import React from 'react'
import { useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';

function Header() {

    var lightText = { color: "white" };

    const redirect = useNavigate();

    // useEffect(() => {
    //     if (!localStorage.getItem.apply('userid')) {
    //         redirect('/');
    //         return false;
    //     }
    // }, []);

    const logout = () => {
        localStorage.removeItem('userid');
        localStorage.removeItem('username');
        toast.success('Logout Success');
        return redirect('/');
    }
    return (
        <div>
            <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{ marginBottom: 0 }}>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <NavLink className="navbar-brand" to="index.html">D Infotech </NavLink>
                </div>
                <div className="header-right">
                    {/* <NavLink to="message-task.html" className="btn btn-info" title="New Message"><b>30 </b><i className="fa fa-envelope-o fa-2x" /></NavLink>
                    <NavLink to="message-task.html" className="btn btn-primary" title="New Task"><b>40 </b><i className="fa fa-bars fa-2x" /></NavLink>
                    <NavLink to="login.html" className="btn btn-danger" title="Logout"><i className="fa fa-exclamation-circle fa-2x" /></NavLink> */}
                    {(() => {
                        if (localStorage.getItem('userid')) {
                            return (
                                <>
                                    <Link to="/profile">
                                        <i className="fa fa-user" style={lightText} aria-hidden="true" /> &nbsp;
                                        <span style={lightText}>
                                            {localStorage.getItem('username')}
                                        </span>
                                    </Link>
                                    &nbsp; &nbsp;

                                </>
                            )
                        }
                        else {
                            return (
                                <>
                                    <Link to="/">
                                        <i className="fa fa-user" style={lightText} aria-hidden="true" /> &nbsp;
                                        <span style={lightText}>
                                            Login
                                        </span>
                                    </Link>
                                </>
                            )
                        }
                    })()}
                    &nbsp;&nbsp;
                    <a href="javascript:void(0)" onClick={logout}>
                        <button type="button" class="btn btn-danger">Logout</button>
                    </a>
                </div>
            </nav>
            {/* /. NAV TOP  */}
            <nav className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li>
                            <div className="user-img-div">
                                {/* <img src="assets/img/user.png" className="img-thumbnail" /> */}
                                <div className="inner-text">
                                    D S
                                    <br />
                                    <small>Last Login : 2 Weeks Ago </small>
                                </div>

                            </div>
                        </li>
                        <li>
                            <NavLink className="active-menu" to="/dashboard"><i className="fa fa-dashboard " />Dashboard</NavLink>
                        </li>

                        {/* Admin */}
                        <li>
                            <NavLink to="#"><i className="fa fa-desktop " />Admin <span className="fa arrow" /></NavLink>
                            <ul className="nav nav-second-level">
                                <li>
                                    <NavLink to="/add_admin"><i className="fa fa-toggle-on" />Add  Admin</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/manage_admin"><i className="fa fa-toggle-on" />Manage  Admin</NavLink>
                                </li>
                            </ul>
                        </li>

                        {/* Categories */}
                        <li>
                            <NavLink to="#"><i className="fa fa-desktop " />Categories <span className="fa arrow" /></NavLink>
                            <ul className="nav nav-second-level">
                                <li>
                                    <NavLink to="/add_categories"><i className="fa fa-toggle-on" />Add  Categories</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/manage_categories"><i className="fa fa-toggle-on" />Manage  Categories</NavLink>
                                </li>
                            </ul>
                        </li>

                        {/* Product */}
                        <li>
                            <NavLink to="#"><i className="fa fa-desktop " />Products <span className="fa arrow" /></NavLink>
                            <ul className="nav nav-second-level">
                                <li>
                                    <NavLink to="/add_Products"><i className="fa fa-toggle-on" />Add  Products</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/manage_Products"><i className="fa fa-toggle-on" />Manage  Products</NavLink>
                                </li>
                            </ul>
                        </li>

                        {/* contect us */}


                        <li>
                            <NavLink to="#"><i className="fa fa-desktop " />Contact us <span className="fa arrow" /></NavLink>
                            <ul className="nav nav-second-level">
                                {/* <li>
                                    <NavLink to="/add_contact"><i className="fa fa-toggle-on" />Add  Contact</NavLink>
                                </li> */}
                                <li>
                                    <NavLink to="/manage_contact"><i className="fa fa-toggle-on" />Manage  Contact</NavLink>
                                </li>
                            </ul>
                        </li>









                        <li>
                            <NavLink to="/manage_user"><i className="fa fa-flash " /> Manage User </NavLink>
                        </li>

                        {/* 
                        <li>
                            <NavLink to="/"><i className="fa fa-flash " onClick={logout} /> Log Out </NavLink>
                        </li> */}


                    </ul>
                </div>
            </nav>
        </div>


    )
}

export default Header



// useEffect(()=>{
//     if(!localStorage.getItem.apply('user_id'))
//     {
//         redirect('/');
//         return false;
//     }
// }, []);