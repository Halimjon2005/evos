import React from 'react'
import './Aside.css'
const Aside = () => {
  return (
    <div>
      <div className="container">
    <div className="phone__wrapper">
        <div className="phone">
            <img src="http://admin.evos.uz/uploads/i_Phone_12_Pro_9b6c6457a4.png" alt="" />
        </div>
        <div className="phone__orta">
       <h1>
        <span>Sevimli taomlar</span>
       </h1>
       <h2>bir marta bosish bilan</h2>
       <p>Telefoningizdagi kamerani yoqing va QR kodini skanerlang</p>
       <div className="icnos__p">
  <img src="http://admin.evos.uz/uploads/shield_f897ac964e.svg" alt="" />
  <p>Qulay filialning manzilini toping
</p>
       </div>
       <div className="icnos__p">
        <img src="
          http://admin.evos.uz/uploads/credit_card_8bd95cf713.svg         " alt="" />
          <p>
Sevimli taomlaringizni buyurtma qiling</p>
        </div>
        <div className="icnos__p">
        <img src="http://admin.evos.uz/uploads/bars_graphic_ffc879bd52.svg" alt="" />
        <p>Aktsiyalarni va maxsus takliflarni kuzatib boring
</p>
        </div>
        <div className="icnos__p">
        <img src="http://admin.evos.uz/uploads/communication_05677903d1.svg" alt="" />
        <p>Buyurtmani oling va zavqlaning! Yoqimli ishtaha!</p>
        </div>
        </div>
        <div className="phone__icons">
             <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Google_Play_Store_badge_FR.svg" alt="" className=' app'/>
             <img src="https://www.unitag.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftemplate_classic.746b0922.png&w=3840&q=75" alt=""className='qr'  />
             <img src="https://strategicfire.org/wp-content/uploads/2016/11/app-store-logo.png" alt="" className=' app' />
             <img src="https://www.unitag.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftemplate_classic.746b0922.png&w=3840&q=75" alt=""  className='qr'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Aside
