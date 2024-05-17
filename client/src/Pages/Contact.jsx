import React from "react";
import ContactContainer from "../Components/ContactContainer";
function Contact(){
    return(<div>
        <div class="container-fluid hero-header">
            <div class="container">
              <div class="row">
                <div class="col-lg-7">
                  <div class="hero-header-inner animated zoomIn">
                    <h1 class="display-1 text-dark"> تواصل معنا</h1>
                    <ol class="breadcrumb mb-0">
                      <li class="breadcrumb-item"><a href="#">الرئيسية</a></li>
                      <li class="breadcrumb-item text-dark" aria-current="page">اتصل بنا</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div> 
    <ContactContainer />
    </div>)
}

export default Contact 