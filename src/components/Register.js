import React from 'react';

const Register = () => {
    return (
        <div>
                        <nav class="navbar navbar-expand-lg navbar-fixed col-md-12 navnav">
               <div class="container">
                  <a class="navbar-brand" href="#"><img src="images/kawo.png" alt="kawo" height="90"></img></a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                
                  <div class="collapse navbar-collapse" id="navbarResponsive">
                     <ul class="navbar-nav navbar-right ml-auto">
                        <li class="nav-item mr-3 kawo">
                           <a class="nav-link text-white" href="index.html">Home
                              <span class="sr-only">(current)</span>
                           </a>
                        </li>
                        <li class="nav-item mr-3 kawo">
                           <a class="nav-link text-white" href="Startups.html">Startups</a>
                        </li>
                        <li class="nav-item mr-3 active kawo">
                           <a class="nav-link text-white" href="register.html">Register</a>
                        </li>
                        <li class="nav-item mr-3 kawo">
                           <a class="nav-link text-white" href="login.html">Login</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
            <div class="container px-5 register">
            
            <h4>Join KowaLegal. Sign up and get your Startup listed now!</h4>
            <br/>

            <form class="container">
               <div class="form-group">
                  <label for="exampleInputEmail1"><h5>Full Name</h5></label>
               <input type="text" class="form-control col-10" id="exampleInputEmail1" ariadescribedby="emailHelp" placeholder="Enter email"></input>
               </div>
               <div class="form-group">
                  <label for="exampleInputEmail1"><h5>Email address</h5></label>
               <input type="email" class="form-control col-10" id="exampleInputEmail1" ariadescribedby="emailHelp" placeholder="Enter email"></input>
               </div>
               <div class="form-group">
                  <label for="exampleInputPassword" class="bold"><h5>Password</h5></label>
               <input type="password" class="form-control col-10" id="exampleInputPassword1"
               placeholder="Password"></input>
               </div>
               <div class="form-group">
                  <label for="exampleInputPassword" class="bold"><h5>Confirm Password</h5></label>
               <input type="password" class="form-control col-10" id="exampleInputPassword1"
               placeholder="Conffirm Password"></input>
               </div>
               <button type="submit" class="btn btn-primary" role="button"><h5>Sign up</h5></button>
            
            </form>
         </div>
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

export default Register;
