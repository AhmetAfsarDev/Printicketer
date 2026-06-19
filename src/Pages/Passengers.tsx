import React from 'react'
import "../App.css"

function Passengers() {
  return (
    <div className='Passengers'>

        <div className="pessengerheader">
        <span>Bilet listesi</span>
        <button>X</button>
        </div>

        <div className='ticketcard'>
         <div className='Passengerdatabox'>
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