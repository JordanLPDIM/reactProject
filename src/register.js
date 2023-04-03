
import app from './firebase';

import { useState } from 'react';
import Navigation from "./navigation";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


function Contacts  ()  {

    const auth = getAuth(app);

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("")


  const singup =() =>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    alert("Compte créee")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    alert(errorCode)
    //const errorMessage = error.message;
    // ..
  });

  }



    return (

      // <><Navigation />
      <div className='register'>
        {/* <Navigation/> */}

        <div className='mydiv'>

          <div className="main">
            <div className="sub-main">
              <div>
               
                <div>
                  <h1>Créer un compte</h1>
                  <div>
                   
                    <input type={"email"} placeholder="Email" className="name" onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="second-input">

                    <input type={"password"} placeholder="Mot de passe" className="name" onChange={(e) => setPass(e.target.value)} />
                  </div>
                  <div className="login-button">
                    <button onClick={singup}>Créer le compte</button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>
    );
};

export default Contacts;
﻿