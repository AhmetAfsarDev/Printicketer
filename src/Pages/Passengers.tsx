import React from 'react'
import "../App.css"
import Header from "../Header.tsx";

function Passengers() {
  return (
    
    <div className='Passengers'>
        {<Header/>}
        
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
