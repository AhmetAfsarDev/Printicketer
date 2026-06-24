import React from 'react'
import "../App.css"
import Header from "../Header.tsx";
function Busservices() {
  return (
    <div  className='Bus-services'>

        {<Header/>}

      
        <div className="servicedatacontainer">

         <ul className='Servicelist'>
       
           <li className="service">

          <span>Nereden: <span>Akhisar</span></span>
          <span>Nereye: <span>İstanbul</span></span>
          <span>Hareket: saati: <span>23:30</span></span>
          <span>Şöför adı:<span>Berk buz</span></span>
          <span>Araç plakası: <span>35 lw 2345</span></span>
          <span>Bilet ücreti: <span>2000</span>TL</span>
           </li>

        
         </ul>

        </div>
         
      
    </div>
  )
}

export default Busservices
