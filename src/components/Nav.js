import React from 'react';

const Nav = () => {
    return (
        <div>
                        <nav class="navbar navbar-expand-lg navbar-light fixed-top col-md-12 navnav">
               <div class="container">
                  <a class="navbar-brand" href="#"><img src="images/kawo-legal-logo.png" alt="kawo" height="90"></img></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  
                  <div class="collapse navbar-collapse" id="navbarResponsive">
                     <ul class="navbar-nav navbar-right ml-auto">
                        <li class="nav-item active mr-3 kawo">
                           <a class="nav-link text-white" href="index.html">Home
                              <span class="sr-only text-white">(current)</span>
                           </a>
                        </li>
                        <li class="nav-item mr-3 kawo">
                           <a class="nav-link text-white" href="Startups.html">Startups</a>
                        </li>
                        <li class="nav-item mr-3 kawo">
                           <a class="nav-link text-white" href="register.html">Register</a>
                        </li>
                        <li class="nav-item mr-3 kawo">
                           <a class="nav-link text-white" href="login.html">Login</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
            <div class="footer mb-1 mt-4">
      <div class="container">
         <div class="row">
            <p class="text-left col-md-8 pt-4 text-white">&copy; 2017 KawoLegal. All rights Reserved</p>

            
            <div class="row col-md-4 ml-2 mt-md-2">
               <div class="row justify-content-center">
                  <div class="d-inline-block bg-muted mx-2">
                     <a type="button" class="btn btn-lg bg-inverse" href="#" target="_"><i class="fa fa-facebook text-info"  aria-hidden="true"></i></a>
                  </div>
                  <div class="d-inline-block bg-muted mx-2">
                     <a type="button" class="btn btn-lg bg-inverse" role="button" href="#" target="_"><i class="fa fa-twitter-square text-info" aria-hidden="true"></i></a>
                  </div>
                  <div class="d-inline-block bg-muted mx-2">
                     <a type="button" class="btn btn-lg bg-inverse" href="#" target="_"><i class="fa fa-linkedin text-info" aria-hidden="true"></i></a>
                  </div>
                  <div class="d-inline-block bg-muted mx-2">
                     <a type="button" class="btn btn-lg bg-inverse" href="#" target="_"><i class="fa fa-instagram text-info"  aria-hidden="true"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

        </div>
    );
}

export default Nav;
