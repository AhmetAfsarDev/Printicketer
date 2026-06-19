import React from 'react';
import axios from 'axios';
import "../App.css";




function Home() {
  return (
    <div className='Home'>
     
        {/* ============================ Header ============================ */ }
        <section className='Header' >
            <div className="logowrapper"><img src='../public/Logo.png' /></div>
            <ul>
              <li><a href="#">Müşteriler</a></li>
              <li><a href="#">Seferler</a></li>
              <li><a href="#">Sohbet</a></li>
            </ul>
        </section>
        {/* ================================================================ */ }

         

        {/* =========================== Ticket input wrapper ============================ */ }
      
          <section className='Mobileheader' ><h4>Yolcu bilgilerini giriniz</h4></section>
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