import React from 'react'

function Add_admin() {
  return (
    <div id="page-wrapper">
      <div id="page-inner">
        <div classname="row">
      <div classname="col-md-12">
        <h1 classname="page-head-line">Add admin</h1>
       
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
                <label>Enter Email</label>
                <input className="form-control" type="text" />
              </div>
              <div className="form-group">
                <label>Enter the Password</label>
                <input className="form-control" type="password" />
              </div>
              
              <button type="submit" className="btn btn-info">Submit </button>
            </form>
          </div>
        </div>
      </div>
    
    </div>

  </div>
 
</div>
  )
}

export default Add_admin