
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
//Google Firebase
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user)=>
{

   if(user)
   {
         console.log("Veri alındı");
   }

});

export { auth };