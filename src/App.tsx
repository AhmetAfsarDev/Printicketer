import { useState, useEffect } from 'react'
import './App.css'
import Login from "./Login.tsx"
import Homepage from "./Pages/Home.tsx"
//import Passengers from './Pages/Passengers.tsx';
//import Busservices from "./Pages/Bus-services.tsx"
import Chat from "./Pages/Chat.tsx"
function App() {
 
  const [signinControl, setSigninControl] = useState<boolean | null>(null);
  const [Homepageopen,Homepageclickcontrol]=useState(true);

  useEffect(() => {
      
    if (signinControl === null) return;

    if (signinControl === true) {
      alert("Giriş yapıldı");
      setSigninControl(false);
      Homepageclickcontrol(true);
    } 
   
  }, [signinControl]); 


  return (
    <div className='App'>
      <Chat/>
     {signinControl==false && <Login param={setSigninControl}/>} 
     {Homepageopen!=false && <Homepage/>}


    </div>
  )
}

export default App
