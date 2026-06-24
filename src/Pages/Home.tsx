import React from 'react';
import "../App.css";
import Header from "../Header.tsx";




function Home() {
  return (
    <div className='Home'>
     
        {/* ============================ Header ============================ */ }
     
        {<Header/>}
        {/* ================================================================ */ }

         

        {/* =========================== Ticket input wrapper ============================ */ }
      
          <section className="ticketinputwrapper">
            <h3>Yolcu bilgilerini giriniz</h3>
          <input  type='text' placeholder='Müşteri adı'></input>
          <input  type='text' placeholder='Müşteri Soyadı'></input>
          <input  type='number' placeholder='Müşteri Telefon numarası'></input>
          <input  type='number' placeholder='Müşteri Tc kimlik numarası'></input>
          <input  type='date' placeholder='Sefer tarihi'></input>
          <input  type='text' placeholder='Nereden'></input>
          <input  type='text' placeholder='Nereye'></input>
          <input  type='number' placeholder='Bilet ücreti'></input>
          <input  type='number' placeholder='Varsa ebeveyn TC kimlik no'></input>
          <button>Bilet oluştur</button>
          </section>
  
        {/*============================================================================== */ }


 
        
        <div></div>
    </div>
  )
}

export default Home
