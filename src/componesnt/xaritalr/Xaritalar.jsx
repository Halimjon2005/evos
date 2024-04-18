
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './xaritalar.css'



const Xaritalar = () => {
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
      const Xarita = data2?.filter((el) => el.category ==="Xarita")
  return (
    <div>
      <div className="container">
        <div className="nav__past">
          <h1>Filiallar</h1>
        <div className='btnpas'>
          <button className='pastbtn'>Royxat</button>
          <button className='pastbtn1'>Xarita</button>
          </div>
        </div>
        <div className="xarita__wrapper">
           {Xarita?.map((el) => {
          return (
            <Link to={`/xarita/${el?.id}`}  className="card__x" key={el.id}>
              <div className="x__ong">
               <img src={el.photo} alt="" />
              <h2>{el.name}</h2>
              </div>
              <div className="x__chap">
              <p>{el.time}</p>
              <p>{el.vaqt}</p>
              </div>

       
            </Link>
          );
        })}
        </div>

        </div>

    </div>
  )
}

export default Xaritalar
