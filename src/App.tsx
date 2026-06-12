import { useState, useEffect } from 'react'
import './App.css'
import Login from "./Login.tsx"

function App() {
  // null = henüz denenmedi, true = giriş başarılı, false = giriş başarısız
  const [signinControl, setSigninControl] = useState<boolean | null>(null);

  useEffect(() => {
    // Sayfa ilk açıldığında (değer null iken) hiçbir şey yapma
    if (signinControl === null) return;

    if (signinControl === true) {
      alert("Giriş yapıldı");
    } else {
      alert("Personel numaranız veya şifreniz yanlış tekrar deneyiniz...");
    }
  }, [signinControl]); // Sadece signinControl değiştiğinde çalışır

  return (
    <div className='App'>
      <Login param={setSigninControl} />
    </div>
  )
}

export default App
