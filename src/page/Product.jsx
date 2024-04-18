import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../componesnt/Nav/Nav';
import { Link } from 'react-router-dom';
import Footer from '../componesnt/Footer/Footer';
import { useCart} from "react-use-cart"

const Product = () => {
const {getItem , removeItem, addItem}=useCart()

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

        const{id} = useParams()
        const findProdcut = data?.find ((el) =>{
          return el?.id == id
        } )
  return (
    <div>
        <Nav/>
        <div className="container">
          <div className="card1__btn">
     
      <div className='card__1'>
        <div className="card1__img">
      <img src ={findProdcut?.photo} alt="" />
      </div>
      <div className="card1__p">
      <h2>{findProdcut?.neme} </h2>
      <p>{findProdcut?.p}</p>
      <p>{findProdcut?.price}</p>
      {!getItem(findProdcut?.id) ?(
     <button onClick={() => addItem(findProdcut)}>{findProdcut?.btn}</button>
      ):(
        <button style={{backgroundColor:"crimson"}} onClick={ ()=> removeItem(findProdcut?.id)}>Bekor qilish</button>
      )}
     </div>


     </div>
   
     <Link to='/' className='card1__btn1'>Orqaga</Link>
     </div>
  

    </div>
   <Footer/>
    </div>
  )
}

export default Product
