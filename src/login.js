import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from './firebase';
import { useState, useEffect } from 'react';
import Navigation from "./navigation";
import './styles.css';

const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    }).catch((error) => {
      // Handle errors here
      console.error(error);
    });
  };

  return (

    // <><Navigation></Navigation>
    
    <div className='login'>
  {user ? (
    <div>
      <h2>Vous êtes connecté !</h2>
      <button onClick={handleSignOut}>Se deconnecter</button>
    </div>
  ) : (
    <div className='mydiv'>
      <div className="main">
        <div className="sub-main">
          <div>
           
            <div>
              <h1>Connexion</h1>
              <div>
                
                <input type={"email"} placeholder="user name" className="name" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="second-input">
                <input type={"password"} placeholder="password" className="name" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="login-button">
                <button onClick={handleSignIn}>Se connecter</button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</div>

  );
}
export default Login;