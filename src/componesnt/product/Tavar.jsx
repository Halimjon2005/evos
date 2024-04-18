import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Tavar.css'
import { Link } from 'react-router-dom';
const Tavar = () => {
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

const Yangiliklar = data?.filter((el) => el?.category === "Yangiliklar")
const Lavash = data?.filter((el) => el.category ==="Lavash")
const Trindwich = data?.filter((el) => el.category ==="Trindwich")
const Shaurma = data?.filter((el) => el.category ==="Shaurma")


  return (
    <div>
      <div className="container">
        <h1>Yangiliklar</h1>
             <div className="wrapper__t">
        {Yangiliklar?.map((el) => {
          return (
            <Link to={`/product/${el?.id}`}  className="card__t" key={el.id}>
               <img src={el.photo} alt="" />
              <h2>{el.name}</h2>
              <p>{el.p}</p>
              <p > <span>{el.price}</span></p>
              < button>{el.btn}</button>

       
            </Link>
          );
        })}
      </div>
      <h1>Lavash</h1>
      <div className="wrapper__t">
        {Lavash?.map((el) => {
          return (
            <Link to={`/product/${el?.id}`}  className="card__t" key={el.id}>
               <img src={el.photo} alt="" />
              <h2>{el.name}</h2>
              <p>{el.p}</p>
              <p > <span>{el.price}</span></p>

              < button>{el.btn}</button>

       
            </Link>
          );
        })}
      </div>
      <h1>Trindwich</h1>
      <div className="wrapper__t">
        {Trindwich?.map((el) => {
          return (
              <Link to={`/product/${el?.id}`}  className="card__t" key={el.id}>
               <img src={el.photo} alt="" />
              <h2>{el.name}</h2>
              <p>{el.p}</p>
              <p > <span>{el.price}</span></p>

              < button>{el.btn}</button>

       
            </Link>
          );
        })}
      </div>
      <h1>Shaurma</h1>
      <div className="wrapper__t">
        {Shaurma?.map((el) => {
          return (
            <Link to={`/product/${el?.id}`}  className="card__t" key={el.id}>
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

export default Tavar
