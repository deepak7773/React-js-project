// import React from 'react'
// import { NavLink,Link } from 'react-router-dom'
// function Add_Products() {
//     return (
//       <div id="page-wrapper">
//       <div id="page-inner">
//         <div classname="row">
//       <div classname="col-md-12">
//         <h1 classname="page-head-line">Add Product</h1>
       
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
//                 <label>Product Name</label>
//                 <input className="form-control" type="text" />
//               </div>
//               <div className="form-group">
//                 <label>Product Des</label>
//                 <input className="form-control" type="text" />
//               </div>
              
//               <div className="form-group">
//                 <label>Product Main Price</label>
//                 <input className="form-control" type="number" />
//               </div>

//               <div className="form-group">
//                 <label>Desc Price</label>
//                 <input className="form-control" type="number" />
//               </div>

//               <div className="form-group">
//                 <label>Discount Price</label>
//                 <input className="form-control" type="number" />
//               </div>
              

//              <div className="form-group">
//   <label className="control-label col-lg-4">Product Image</label>
//   <div className>
//     <div className="fileupload fileupload-new" data-provides="fileupload">
//       <div className="fileupload-preview thumbnail" style={{width: 200, height: 150}} />
//       <div>
//         <span className="btn btn-file btn-success"><span className="fileupload-new">Select image</span><span className="fileupload-exists">Change</span><input type="file" /></span>
//        &nbsp; <Link to="#" className="btn btn-danger fileupload-exists" data-dismiss="fileupload">Remove</Link>
//       </div>
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

// export default Add_Products

import React,{useState,useEffect} from 'react'
import { NavLink,Link } from 'react-router-dom'
import {toast} from'react-toastify';
import axios from 'axios'
function Add_Products() {
    const [formvalue,setFormvalue]=useState({
      cate_name:"",
      title:"",
      main_price:"",
      disc_price:"",
      desc : "",
    });  
    const onchange=(e)=>{
      setFormvalue({...formvalue,id: new Date().getTime().toString(),[e.target.name]:e.target.value,});
      console.log(formvalue);
    }

    function validetion()
   {
      var result=true;
      if (formvalue.cate_name == "") 
      {
        toast.error("Categories Name is required !");
        result=false;
      }
      
      if (formvalue.title == "") 
      {
        toast.error("Title is required !");
        result=false;
      }
      if (formvalue.main_price == "") 
      {
        toast.error("Main Price is required !");
        result=false;
      }
      if (formvalue.disc_price == "") 
      {
        toast.error("Discount Price is required !");
        result=false;
      }
      if (formvalue.desc == "") 
      {
        toast.error("Desc is required !");
        result=false;
      }
      return result;
    }

      
const onsubmit = async (e) => {
  e.preventDefault();
  if (validetion()) 
  {
    const res = await axios.post(`http://localhost:3000/productname `,formvalue);
    if (res.status == 201) {
      toast.success("Inqury Submittted Success !");
      setFormvalue({...formvalue,    cate_name:"",
      title:"",
      main_price:"",
      disc_price:"",
      desc : "",
      pro_img:"",});
    }
  }
};

  
  return (
      <div id="page-wrapper">
      <div id="page-inner">
        <div classname="row">
      <div classname="col-md-12">
        <h1 classname="page-head-line">Add Product</h1>
       
      </div>
    </div>
    
    <div className="row">
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="panel panel-info">
          <div className="panel-heading">
            BASIC FORM
          </div>
          <div className="panel-body">
            <form role="form" action='' method='post'>
             <div className='form-group'>
              <label>Choose Categories</label>
              <select choose products className='form-control'>
                <option>Select</option>
                <option>Men Watch</option>
                <option>Women Watch</option>
                <option>Men Ring</option>
                <option>Women Ring</option>
                <option>Flower Bouquet</option>
                <option>Teddy Bear</option>
              </select>
             </div> 
              <div className="form-group">
                <label>Categories Name</label>
              <input value={formvalue.cate_name} name='cate_name' onChange={onchange} type='text' className='form-control'></input>
              </div>
              <div className="form-group">
                <label>Product Name</label>
                <input className="form-control" value={formvalue.title} name='title' onChange={onchange} type="text" />
              </div>
              <div className="form-group">
                <label>Product Des</label>
                <input value={formvalue.desc} name='desc' onChange={onchange} className="form-control" type="text" />
              </div>
              
              <div className="form-group">
                <label>Product Main Price</label>
                <input value={formvalue.main_price} name='main_price' onChange={onchange} className="form-control" type="number" />
              </div>

              <div className="form-group">
                <label>Desc Price</label>
                <input  value={formvalue.disc_price} name='disc_price' onChange={onchange}  className="form-control" type="number" />
              </div>


                      <div className="form-group">
                      <label className="control-label col-lg-4">
                        Upload Categories Image
                      </label>
                      <div>
                      <input value={formvalue.pro_img} name='pro_img' onChange={onchange} className="form-control" type="url" />
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

export default Add_Products