import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Nav from '../componesnt/Nav/Nav';
import Footer from '../componesnt/Footer/Footer';


const Xarita = () => {
    const [data2, setDate2] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:7777/filiallar")
          .then((res) => {
            setDate2(res.data);
          })
          .catch((err) => {
            alert(err);
          });
      }, []);

        const{id} = useParams()
        const Xaritalar = data2?.find ((el) =>{
          return el?.id == id
        } ) 
  return (
    <div>
        <Nav/>
        <div className="container">
        <div className="card1__img1">
     <h1>{Xaritalar?.name}</h1>
      </div>
   <div className="xarita__ls">
       
 
      
      <div className="card1__x">
        <div className="x__left">
          <div className="trr">
      <p>{Xaritalar?.adres}</p>
  <span>    <h3>{Xaritalar?.manzil} </h3>
     <h3>{Xaritalar?.manzil1} </h3></span>
      </div>
      </div>
      <br /><br />
      <div className="x__reght">
      <p>{Xaritalar?.p}</p>
      <p>{Xaritalar?.time}</p>
  
  
      </div>
     <div className='harita'> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11511.41729836492!2d69.26487299376275!3d41.32097102072952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7ef5384327%3A0xf2570d2fe34dface!2sEVOS!5e0!3m2!1suz!2s!4v1710931795540!5m2!1suz!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
     </div>

     </div>
  
    </div>
    <Footer/>
    </div>
  )
}

export default Xarita
