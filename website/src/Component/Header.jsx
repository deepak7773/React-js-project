import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify';

function Header() {

    var header={zIndex:"-999"}

    const redirect = useNavigate();

    const logout = () => {
        localStorage.removeItem('userid');
        localStorage.removeItem('username');
        toast.success('Logout Success');
        return redirect('/');
    }
    return (

        <div>
            {/* header section strats */}
            <header className="header_section" style={header}>
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <NavLink className="navbar-brand" to="/">
                        <span>
                            Giftos
                        </span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/shop">
                                    Shop
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/why">
                                     Categories
                                </NavLink>
                                <div className='dropdown-menu'>
                                   <Link className='dropdown-item' to=''>Man</Link>
                                   <Link className='dropdown-item' to=''>Women</Link>
                                   {/* <Link className='dropdown-item' to=''></Link>
                                </div>
                            </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/why">
                                    Why Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/testimonial">
                                    Testimonial
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile"> Profile </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                    <NavLink className="nav-link" to="/signup">Sign up</NavLink>
                                </li> */}
                        </ul>
                        <div className="user_option">

                            {(() => {
                                if (localStorage.getItem('userid')) {
                                    return (
                                        <>
                                            <Link to="/profile">
                                                <i className="fa fa-user" aria-hidden="true" />
                                                <span>
                                                    {localStorage.getItem('username')}
                                                </span>
                                            </Link>
                                            <a href="javascript:void(0)" onClick={logout}>
                                                <span>
                                                    Logout
                                                </span>
                                            </a>
                                        </>
                                    )
                                }
                                else {
                                    return (
                                        <>
                                            <Link to="/login">
                                                <i className="fa fa-user" aria-hidden="true" />
                                                <span>
                                                    Login
                                                </span>
                                            </Link>
                                        </>
                                    )
                                }
                            })()}

                            {/* <NavLink to="/login">
                                <i className="fa fa-user" aria-hidden="true" />
                                <span>
                                    Login
                                </span>
                            </NavLink> */}

                            <NavLink>
                                <i className="fa fa-shopping-bag" aria-hidden="true" />
                            </NavLink>
                            <form className="form-inline ">
                                <button className="btn nav_search-btn" type="submit">
                                    <i className="fa fa-search" aria-hidden="true" />
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
            {/* end header section */}

        </div>


    )
}

export default Header