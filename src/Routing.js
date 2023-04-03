import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import Login from './login';
import Contacts from './register';
import CvReact from './accueilCV';

function Routing() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={CvReact} />
      <Route path="/login" component={Login} />
      <Route path="/contact" component={Contacts} />
    </BrowserRouter>
  );
}

export default Routing; 
