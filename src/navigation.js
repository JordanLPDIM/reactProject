import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from './firebase';
import { useState, useEffect } from 'react';

import './styles.css';


function Navigation() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
    <nav style={{ backgroundColor: "#191919", color: "#fff", padding: "10px" }}>
      <ul style={{ display: "flex", justifyContent: "space-around", listStyle: "none", margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Accueil CV</Link>
        </li>

        <li>
          <Link to="/telecharger" style={{ color: "#fff", textDecoration: "none" }}>Télecharger CV</Link>
        </li>

        <li>
          <Link to="/portfolio" style={{ color: "#fff", textDecoration: "none" }}>Portfolio</Link>
        </li>

        <li>
          <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>Login</Link>
        </li>
        <li>
          <Link to="/register" style={{ color: "#fff", textDecoration: "none" }}>Register</Link>
        </li>
      </ul>
    </nav>
    <div id="animation-container">
      {user ? (
        <p style={{ paddingLeft: "10px" }}>Bienvenue, {user.email}!</p>
      ) : (
        <p style={{ paddingLeft: "10px" }}>Vous n'êtes pas connecté!</p>
      )}
    </div>
    </div>
  );
  
}


export default Navigation;