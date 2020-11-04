import React from 'react';

const Footer = () => {
    return (
        <div>
         <div class="footer mb-1 mt-4">
      <div class="container-fluid">
         <div class="row">
            <p class="text-left col-8 pt-4 text-white">&copy; 2017 KawoLegal. All rights Reserved</p>

            
            <div class="row col-4 ml-2 mt-2">
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

export default Footer;
