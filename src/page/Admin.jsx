import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
const Admin = () => {
  const [data1, setDate1] = useState([]);
  const Qosh = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:7777/sotuv',{
    name:e.target[0].value,
    photo:e.target[1].value,
    p:e.target[2].value,
    price:e.target[3].value,
    btn:e.target[4].value,
    category:e.target[5].value,

    
    }) .then(()=>{
      alert("user yaratildi!");
      window.location.reload();
    })
    .catch((err) => {
      alert(err);
    })
   }
   const userDelete = (id) =>{
    axios.delete(`http://localhost:7777/sotuv/${id}`)
    .then(()=>{
      alert("user ochrildi");
      window.location.reload();
    })
    .catch((err) => {
      alert(err);
    })
   }

  const navigate = useNavigate()
  useEffect(() => {
      axios
        .get("http://localhost:7777/sotuv")
        .then((res) => {
          setDate1(res.data);
        })
        .catch((err) => {
          alert(err);
        });
    }, []);
 useEffect(()=>{
   if(!localStorage.getItem('parol')){
    navigate('/')
   }
 },[])
  return (
    <div>
      <form className='from'onSubmit={Qosh} > 

<input type="text" placeholder='name' />
<input type="text" placeholder='img' />
<input type="text" placeholder=' p malumot' />
<input type="number" placeholder='summa' />

<input type="text" placeholder=' btn' />
<input type="text" placeholder='category' />


<button type='submit' className='btn4'> yangi teg qosh</button>
</form>
      <div className="container">
               <div className="wrapper__t">
        {data1.map((el) => {
          return (
            <Link to={`/product/${el?.id}`}  className="card__t" key={el.id}>
           <h3  className='h6' onClick={() => userDelete(el?.id)}>X</h3>

               <img src={el.photo} alt="" />
              <h2>{el.name}</h2>
              <p>{el.p}</p>
              <p > <span>{el.price}</span></p>
              < button>{el.btn}</button>

       
            </Link>
          );
        })}
      </div>
      </div>
    </div>
  )
}

export default Admin
