import React, { useState } from 'react';
import Db from "./Db.json";
import "./App.css";


type LoginProps = {
  param: (value: boolean) => void;
};

function Login({ param }: LoginProps) {
  const [personelNumberCheck, setPersonelNumberCheck] = useState<number>(0);
  const [passwordCheck, setPasswordCheck] = useState<number>(0);
  const [loginControl, setLoginControl] = useState<boolean>(false);

  function LoginF() {
    const user = Db.find(
      (item) =>
        item.DbPersonelnumber === personelNumberCheck &&
        item.DbPersonelpassword === passwordCheck
    );

    if (user) {
      setLoginControl(true);

      param(true); 
    } else {
    
      param(false);
    }
  }

  return (
    <div className='Login'>
      <div className='Logincontainer'>
        <h3>Hisaryol turizm personel giriş sayfası</h3>

        <input 
          type="number" 
          placeholder="Personel Numarası"
          onChange={(e) => setPersonelNumberCheck(Number(e.target.value))} 
        />
        <input 
          type="password" 
          placeholder="Şifre"
          onChange={(e) => setPasswordCheck(Number(e.target.value))} 
        />

        <button onClick={LoginF}>Giriş yap</button>
      </div>

      <div className="imgcontainer">
        <img src="/Homebackground.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
