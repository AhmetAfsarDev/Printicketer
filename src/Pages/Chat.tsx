import React from 'react'

function Chat() {
  return (
    <div className='Chat' >
         <section className='Header' >
            <div className="logowrapper"><img src='../public/Logo.png' /></div>
            <ul>
              <li><a href="#">Müşteriler</a></li>
              <li><a href="#">Seferler</a></li>
              <li><a href="#">Sohbet</a></li>
            </ul>
        </section>

        <div className="chatcontainer">
            <div className="activedrivers">
                <ul className='Activedriverlist' >
                    <li><a  href='#' className='Driver'>
                    <span className="Drivername"><span className='Onlinechekking'>🟢</span> Mehmet buz </span>
                    <span className='Busplateinfo'>35 lw 97854</span>
                    </a></li>

                    <li><a  href='#' className='Driver'>
                    <span className="Drivername"><span className='Onlinechekking'>🟢</span> Mehmet buz </span>
                    <span className='Busplateinfo'>35 lw 97854</span>
                    </a></li>

                      <li><a  href='#' className='Driver'>
                    <span className="Drivername"><span className='Onlinechekking'>🟢</span> Mehmet buz </span>
                    <span className='Busplateinfo'>35 lw 97854</span>
                    </a></li>  
                </ul>
            </div>



            <div className="chatwrapper">

             <div className="chatscrean">
                <ul>
                    <li className='Received-message'>Gelen mesaj</li>
                    <li className='Sent-message'>Gonderilen mesaj</li>
                 <li className='Received-message'>Gelen mesaj</li>
                    <li className='Sent-message'>Gonderilen mesaj</li>


                </ul>
             </div>

             <div className="inputcontainer">
                <input type="text" placeholder='Mesaj giriniz...' />
                <button className="sendingbtn">Gonder</button>
             </div>

            </div>
        </div>

    </div>
  )
}

export default Chat
