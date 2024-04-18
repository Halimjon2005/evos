import React, { useEffect, useState } from 'react'
import Nav from '../componesnt/Nav/Nav'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Footer from '../componesnt/Footer/Footer';

const Yangilikga = () => {
const [data3, setDate3] = useState([]);
useEffect(() => {
  axios
    .get("http://localhost:7777/yangiliklar")
    .then((res) => {
      setDate3(res.data);
    })
    .catch((err) => {
      alert(err);
    });
}, []);
const{id} = useParams()
const Rasm = data3?.find((el) =>{
  return el?.id == +id
} ) 

  return (
    <div>
    <Nav/>
    <div className="container">
      <div className='yangilik___1' >
      <div className="yangilik__ota">

        <img src={Rasm?.photo} alt="" />
        </div>
        <div className="yangilik__ong">
        <h1>{Rasm?.name}</h1>
        <p>Aziz do'stlar, Muqaddas Ramazon oyida biz siz uchun maxsus taklif <br />
        tayyorladik:</p>
        <p>{Rasm?.p}</p>
        <p>{Rasm?.p1}</p>
        -----
        <p>Дорогие друзья, на время Священного месяца Рамадан мы  <br />
        подготовили для вас специальное предложение:</p>
        <p>{Rasm?.p}</p>
        <p>{Rasm?.p1}</p>
        <p>{Rasm?.sayt}</p>
        <p>{Rasm?.phone}</p>
        </div>
        </div>
        </div>
<div className="btn1234">
      <Link to='/' className='yangilik__btn'>Orqaga</Link>
      </div>
<Footer/>

  </div>
  )
}

export default Yangilikga