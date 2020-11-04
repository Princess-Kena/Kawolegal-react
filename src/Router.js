import React from 'react';
import {BrowserRouter as AppRouter, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import ServiceDetails from './components/ServiceDetails';
import Startups from './components/Startups';
import Register from './components/Register';
import Login from './components/Login';



const Router  = () => {
    return (
     <AppRouter>
         <nav>
             <Link to="/">Home</Link>
             <Link to="/startups">Startups</Link>
             <Link to="/register">Register</Link>
             <Link to="/login">Login</Link>
         </nav>
         <Route exact path="/" component={Home} />
         <Route path="/startups" component={Startups} />        
          <Route path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route  path="/services/:id" component={ServiceDetails} />

         <hr/>
     </AppRouter>
    );
}

export default Router ;
