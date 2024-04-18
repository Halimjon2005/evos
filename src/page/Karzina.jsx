import React from 'react'
import Nav from '../componesnt/Nav/Nav'
import { useCart } from 'react-use-cart'
import axios from 'axios';


const Karzina = () => {
 
  const{items, isEmpty,emptyCart ,updateItemQuantity,removeItem} =useCart()
  console.log(items);
  let umumiySumma=0;
  const postTest = () => {
    axios.post(
      `https://api.telegram.org/bot5378253930:AAEW0rlP7j7KA50TxsypNSLLKvQ5jYnNPfc/sendMessage?chat_id=-1001553163227&text=${encodeURIComponent(
        `<b>Details:</b>

    <b>The operation was completed successfully!</b>
    <b>our couriers will contact you soon!</b>
    <b> Call Center: +998 99 855 73 85 </b>
    <b>  ism: ${localStorage.getItem('ism')}</b>
${items
  .map((item) => {
    return `
<b>${item.name}</b>
${item.quantity} x ${item.price} so'm = ${item.quantity} 
    `;
  })
  .join("")}        
<b>Total:</b> ${umumiySumma} som`
      )}&parse_mode=html`
    )
    .then(() =>  {
      emptyCart()
      window.location.reload()
    })
  };

  return (
    <div>
      <Nav/>
      <div className="container">
  <div className="karzina__card">
   {items.map((el)=>{
    const narxSoni = el?.quantity*el?.price
    umumiySumma+=narxSoni
    return(
      <div className="card__k" key={el.id}>
       <img src={el.photo} alt="" />
       <p>{el.name}</p>
       <p>{narxSoni}</p>
       <button onClick={()=> updateItemQuantity(el?.id, el?.quantity-1)}>-</button>
       <h4>{el?.quantity}</h4>
      <button onClick={()=> updateItemQuantity(el?.id, el?.quantity+1)}>+</button>
      <h1 onClick={()=> removeItem(el?.id)}>och</h1>
      </div>
    )
   })}
  </div>
    </div>
    <div className="container">
    <div className="btns">
    <h1> Umumiy summa: {umumiySumma}</h1>
     {localStorage.getItem('parol') ?(
    <button onClick={postTest} >Zakaz berish</button>

     ):(
      <button onClick={()=> alert("Yuqoradugi link orqali royxatdan oting")}>Royxatdan  <br />otimagan </button>
     )}
  </div>
    </div>

    </div>
  )
}

export default Karzina
