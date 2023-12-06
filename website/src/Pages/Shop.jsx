import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Shop() {

    useEffect(()=>{
        fetch();
      },[]);

      const [data, setData] = useState([]);
  
      const fetch = async () => {
        const res = await axios.get(`  http://localhost:3000/productname`);
        setData(res.data);
      };
      
      
    return (
        <div>
            <section className="shop_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Latest Products
                        </h2>
                    </div>
                    <div className="row">
                    {data.map((value,index,entarr)=>{
              return (
                <div className="col-sm-6 col-md-4 col-lg-3">
               <div className="box">
                <a href>
                  <div className="img-box">
                    <img src={value.pro_img} alt />
                  </div>
                  <div className="detail-box">
                    <h6>{value.title}</h6>
                    <h6>
                     <del> ₹<span>{value.main_price}</span></del>
                    </h6>

                    <h6>₹
                     <span>{value.disc_price}</span> 
                    </h6>
                  </div>
                  <div className="new">
                    <span>New</span>
                  </div>
                </a>
              </div>
            </div>
        
              );
             })};
               </div>
          
          <div className="btn-box">
            <a href>View All Products</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Shop