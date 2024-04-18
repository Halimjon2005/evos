import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Slayder.css'

const Slayder = () => {
    const [data, setDate] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:7777/sotuv")
          .then((res) => {
            setDate(res.data);
          })
          .catch((err) => {
            alert(err);
          });
      }, []);
  return (
    <>
    <br />
    <br />
<h1 style={{textAlign:"center"}}>Sotuv xitlari</h1>
          <div className="wrapper">
        {data.map((el) => {
          return (
            <div className="card" key={el.id}>
               <img src={el.photo} alt="" />
              <h2>{el.name}</h2>
              <p>{el.p}</p>
              <p>{el.price}</p>
              {/* < button>{el.btn}</button> */}

       
            </div>
        
          );
        })}
      </div>
   
    </>
  )
}

export default Slayder
