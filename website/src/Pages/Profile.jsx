import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

function Profile() {

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('userid')}`);
        setData(res.data)
    }

    const [formvalue, setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    });

    const [editid, setid] = useState("");
    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        setFormvalue(res.data)
        setid(id);
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
            const res = await axios.patch(`http://localhost:3000/user/${editid}`, formvalue);
            if (res.status == 200) {
                toast.success('update Success !');
                setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "" });
                fetch();
            }
        }
    }

    return (
        <div>
            <section style={{ backgroundColor: '#eee' }}>
                <div className="container py-5 mt-5 mb-5">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYmkp9a2rrD1Sskb9HLt5mDaTt4QaIs8CcBg&usqp=CAU" alt="avatar" className="rounded-circle img-fluid" style={{ width: 150 }} />
                                    {/* <h5 className="my-3">Deepak Solanki</h5> */}
                                    <p className="text-muted mb-1">Click on this Edit Button to edit your profile</p>
                                    {/* <p className="text-muted mb-4">Ahmedabad,Gujarat</p> */}
                                    <div className="d-flex justify-content-center mb-2">

                                        <div className='btn btn-primary'>
                                            <a href="javascript:void(0)" className='text-light' onClick={() => editdata(data.id)} data-bs-toggle="modal" data-bs-target="#myModal" >Edit Profile</a>
                                        </div>

                                        {/* <button type="button" className="btn btn-primary">Edit</button> */}
                                        {/* <button type="button" className="btn btn-outline-primary ms-1">Message</button> */}
                                    </div>
                                </div>
                            </div>
                            <div>
                                {/* Button to Open the Modal */}
                                {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                                    Open modal
                                </button> */}
                                {/* The Modal */}
                                <div className="modal"  id="myModal">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            {/* Modal Header */}
                                            <div className="modal-header">
                                                <h4 className="modal-title"> Edit Profile </h4>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                            </div>
                                            {/* Modal body */}
                                            <div className="modal-body">
                                                <section className="contact_section">
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
                                                                <button onClick={onsubmit} data-bs-dismiss="modal">
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            </section>
                                            </div>
                                           
                                            {/* Modal footer */}
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-0">
                                    <ul className="list-group list-group-flush rounded-3">
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fas fa-globe fa-lg text-warning" />
                                            <p className="mb-0"></p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-github fa-lg" style={{ color: '#333333' }} />
                                            <p className="mb-0"></p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-twitter fa-lg" style={{ color: '#55acee' }} />
                                            <p className="mb-0"></p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-instagram fa-lg" style={{ color: '#ac2bac' }} />
                                            <p className="mb-0"></p>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                            <i className="fab fa-facebook-f fa-lg" style={{ color: '#3b5998' }} />
                                            <p className="mb-0"></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Full Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{data.name}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{data.email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">password</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{data.password}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Mobile</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{data.mobile}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Address</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">Ahmedabad,Gujarat</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Profile