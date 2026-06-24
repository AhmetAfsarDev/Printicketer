import React from 'react'

function Header() {

  return (
    <section className='Header' >
            <div className="logowrapper"><img src='../public/Logo.png' /></div>
            <ul className='Headerwrapper'>
              <li><a href="#">Ana Sayfa</a></li>
              <li><a href="#">Müşteriler</a></li>
              <li><a href="#">Seferler</a></li>
              <li><a href="#">Sohbet</a></li>
            </ul>
        </section>
  )
}

export default Header
