import React, { useEffect, useState } from 'react'
import './yangilik.css'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Yangilik = () => {
    const[data3,setDate3] = useState([])
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
      const Yangilik1 = data3?.filter((el) => el.category ==="yangilik")
      const Yangilik2 = data3?.filter((el) => el.category ==="yangilik0")


  return (
    <div>
        <div className="container">
          
       <div className="yangilikk">
        <h1>Yangilik</h1>
       </div>
       <div className="container">
       <div className="yangilik____ota">
       <div className="yangilik__img">
        {Yangilik1?.map((el)=>{
            return(
                <Link to={`/yangilik/${el?.id}`} className="yangilik__card" key={el?.id}>
        <img src={el?.photo} alt="" className='yangi__img' />
        {/* <img src="" alt="" className='yangi__img1' />   */}

                </Link>
            )
        })}
       </div>

        
 
        <div className="container">
       
       <div className="container">
       <div className="yangilik__img">
        {Yangilik2?.map((el)=>{
            return(
                <Link to={`/yangilik/${el?.id}`} className="yangilik__card" key={el?.id}>
        <img src={el.photo} alt="" className='yangi__img1' />  

                </Link>
            )
        })}
       </div>
        </div>
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Yangilik
