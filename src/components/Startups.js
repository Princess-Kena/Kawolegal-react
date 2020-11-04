import React from 'react';

const Startups = () => {
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
            <div class="container mt-4">
            <div class="row">
               <form class="form-inline col-md-12 my-2 my-lg-0">
                  <input class="form-control mr-sm-2 col-10" type="search" placeholder="search Startups by name or industry" aria-label="Search"></input>
                  <button class="btn my-2 my-sm-0 bg-primary text-white" type="submit"><i class="fa fa-search pr-3" aria-hidden="true"></i> Search</button>
               </form>
            </div>
            <div class="row mt-5 pl-5">
               <div class="row col-3">
                  <img src="images/lan.jpeg" alt="tutahub" class="img-thumbnail startup"></img>
               </div>
               <div class="container col-9 mt-3">
                  <a href="#" class="display-3"><h3>Slatecube</h3></a>
                  <p class="startup-text lead">Slatecube helps job seekers develop job-relevant skills, gain work experience, and land well paying jobs through world-class up-skilling courses and virtual internships.</p>
                  <a href="#"><button class="btn btn btn-sm border" role="button">See full details</button></a>
                  <hr/>
               </div>
               <div class="row col-3 mt-">
                  <img src="images/download.png" alt="think" class="img-thumbnail startup"></img>
               </div>
               <div class="container col-9 mt-3">
                  <a href="#" class="display-3"><h3>Think and Zoom</h3></a>
                  <p class="startup-text lead">Providing solutions for the visually impaired, such as mind-controlled zooming, and wearable controlled zooming.</p>
                  <a href="#"><button class="btn btn btn-sm border" role="button">See full details</button></a>
                  <hr/>
               </div>
               <div class="row col-3 mt-3">
                  <img src="images/tra.png" alt="anditer" class="img-thumbnail startup"></img>
               </div>
               <div class="container col-9 mt-3">
                  <a href="#" class="display-3"><h3>SleekJob Academy</h3></a>
                  <p class="startup-text lead">Trains world class software developers in Ghana and matches them to employment opportunities</p>
                  <a href="#"><button class="btn btn btn-sm border" role="button">See full details</button></a>
                  <hr/>
               </div>
               <div class="row col-3 mt-3">
                  <img src="images/and.jpeg" alt="tutahub" class="img-thumbnail startup"></img>
               </div>
               <div class="container col-9 mt-3">
                  <a href="#" class="display-3"><h3>Anditer</h3></a>
                  <p class="startup-text lead">Anditer is a tech blog</p>
                  <a href="#"><button class="btn btn btn-sm border" role="button">See full details</button></a>
                  <hr/>
               </div>   
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

export default Startups;
