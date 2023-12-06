import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


function Manage_contact() {
  useEffect(() => {
    fetch();
  }, []);
  const [data, setData] = useState([]);
  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/contact`);
    setData(res.data);
  };

  const onDelete=async(id)=>
  {
    const res=await axios.delete(`http://localhost:3000/contact/${id}`);
    // console.log(res);
    if(res.status=="200")
    {
      // alert('Delete Success');
      toast.success('Delete Succesfully')
      fetch();
    }
  }
 
  return (
    <div id="page-wrapper">
      <div id="page-inner">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-head-line"> Manage Contact</h1>
            <h1 className="page-subhead-line">
              This is dummy text , you can replace it with your original text.{" "}
            </h1>
          </div>
        </div>
        {/* /. ROW  */}
        <div className="row">
          <div className="col-md-12">
            {/*   Kitchen Sink */}
            <div className="panel panel-default">
              <div className="panel-heading">Manage Product</div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Comment</th>
                        <th>Created_at</th>
                        <th>Update_at</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((value, index, entarr) => {
                        return (
                          <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.msg}</td>
                            <td>{value.created_at}</td>
                            <td>{value.update_at}</td>

                            <td>
                            <button className="btn btn-danger" onClick={()=>onDelete(value.id)}>Delete</button>
                              &nbsp;&nbsp;
                              <button className="btn btn-primary">Edit</button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* End  Kitchen Sink */}
          </div>
        </div>
      </div>
      {/* /. PAGE INNER  */}
    </div>
  );
}

export default Manage_contact;
