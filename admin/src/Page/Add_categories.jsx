// import React from 'react'
// import { NavLink,Link } from 'react-router-dom'
// function Add_categories() {
//     return (
//       <div id="page-wrapper">
//       <div id="page-inner">
//         <div classname="row">
//       <div classname="col-md-12">
//         <h1 classname="page-head-line">Add Categories</h1>

//       </div>
//     </div>

//     <div className="row">
//       <div className="col-md-12 col-sm-12 col-xs-12">
//         <div className="panel panel-info">
//           <div className="panel-heading">
//             BASIC FORM
//           </div>
//           <div className="panel-body">
//             <form role="form">
//               <div className="form-group">
//                 <label>Categories Name</label>
//                 <input className="form-control" type="text" />
//               </div>
//               <div className="form-group">
//                 <label>Categories Des</label>
//                 <input className="form-control" type="text" />
//               </div>


//              <div className="form-group">
//   <label className="control-label col-lg-4">Categories Image </label>
//   <div className>
//     <div className="fileupload fileupload-new" data-provides="fileupload">
//                 <input className="form-control" type="url" />
//       {/* <div className="fileupload-preview thumbnail" style={{width: 200, height: 150}} /> */}
//       {/* <div>
//         <span className="btn btn-file btn-success"><span className="fileupload-new">Select image</span><span className="fileupload-exists">Change</span><input type="file" /></span>
//        &nbsp; <Link to="#" className="btn btn-danger fileupload-exists" data-dismiss="fileupload">Remove</Link>
//       </div> */}
//     </div>
//   </div>
// </div>
//               <button type="submit" className="btn btn-info">Submit </button>
//             </form>
//           </div>
//         </div>
//       </div>

//     </div>

//   </div>

// </div>

//     )
// }

// export default Add_categories

import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios';
function Add_categories() {
  const [formvalue, setFormvalue] = useState({
    cate_name: "",
    cate_desc: "",
    cate_img: "",
  });

  const onchange = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    console.log(formvalue);
  }
  function validetion() {
    var result = true;
    if (formvalue.cate_name == "") {
      toast.error("Categories Name is requied !")
      result = false;
    }

    if (formvalue.cate_desc == "") {
      toast.error("Categories is requied !")
      result = false;
    }


    return result;
  }

  const onsubmit = async (e) => {
    e.preventDefault();
    if (validetion()) {
      const res = await axios.post(`  http://localhost:3000/categories`, formvalue)
      if (res.status = 201) {
        toast.success("Inqury Submitted Succeass !");
        setFormvalue({ ...formvalue, cate_name: "", cate_desc: "", cate_img: "" });
      }
    }
  };



  return (
    <div id="page-wrapper">
      <div id="page-inner">
        <div classname="row">
          <div classname="col-md-12">
            <h1 classname="page-head-line">Add Categories</h1>

          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="panel panel-info">
              <div className="panel-heading">
                BASIC FORM
              </div>
              <div className="panel-body">
                <form role="form">
                  <div className="form-group">
                    <label>Categories Name</label>
                    <input value={formvalue.cate_name} name='cate_name' onChange={onchange} className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <label>Categories Des</label>
                    <input value={formvalue.cate_desc} name='cate_desc' onChange={onchange} className="form-control" type="text" />
                  </div>


                  <div className="form-group">
                    <label className="control-label col-lg-4">Categories Image </label>
                    <div>
                      <div className="fileupload fileupload-new" data-provides="fileupload">
                        <input value={formvalue.cate_img} name='cate_img' onChange={onchange} className="form-control" type="url" />
                        {/* <div className="fileupload-preview thumbnail" style={{width: 200, height: 150}} />
      <div>
        <span className="btn btn-file btn-success"><span className="fileupload-new">Select image</span><span className="fileupload-exists">Change</span><input type="file" /></span>
       &nbsp; <Link to="#" className="btn btn-danger fileupload-exists" data-dismiss="fileupload">Remove</Link>
      </div> */}
                      </div>
                    </div>
                  </div>



                  <button type="submit" onClick={onsubmit} className="btn btn-info">Submit </button>
                </form>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>

  )
}

export default Add_categories