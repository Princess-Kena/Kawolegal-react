import React from 'react';

const Home = () => {
    return (
        <div>
                     <div class="container py-5 col-md-5">
            <header class="text-center text-white py-5">
               <h1 class="display-4">KAWOLEGAL</h1>
            </header>
            <div class="text-white text-center">
               <h3 class="">
                  A collaborative ecosystem for problem solvers and support for Startups.
               </h3>
               <br/>
               <p>
                  <a href="register.html"><button class="btn btn-info btn-lg text-btn" role="button">Register Now!</button></a>
               </p>
               
            </div>
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

export default Home;
