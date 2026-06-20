import React from 'react'
import "../App.css"

function Passengers() {
  return (
    
    <div className='Passengers'>
<section className='Header' >
            <div className="logowrapper"><img src='../public/Logo.png' /></div>
            <ul>
              <li><a href="#">Müşteriler</a></li>
              <li><a href="#">Seferler</a></li>
              <li><a href="#">Sohbet</a></li>
            </ul>
        </section>

        

        <div className='ticketcard'>
         <div className='Passengerdatabox'>
               <h3>Yolcu bilgileri</h3>
              <span>Yolcu adı: <span className='Passengername'>Yolcuadı</span></span>
              <span>Yolcu soyadı: <span className='Passengersurname'>Yolcu soyadı</span></span>
              <span>Nereden: <span className='Where'>Binilen şehir</span></span>
              <span>Nereye: <span className='To-where'>Gidilen şehir</span></span>
              <span>Yolculuk tarihi: <span className='Date'>Tarih</span></span>
         </div>
        </div>

          
      
        
    </div>
  )
}

export default Passengers
