import React from "react";
import AboutContainer from "../Components/AboutContainer";
import TeamContainer from "../Components/TeamContainer";
function About(){
    return(<div>
         {/* <!-- Hero Start --> */}
            <div class="container-fluid hero-header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <div class="hero-header-inner animated zoomIn">
                                <h1 class="display-1 text-dark">عنا </h1>
                                <ol class="breadcrumb mb-0">
                                    <li class="breadcrumb-item"><a href="/">الرئيسيه</a></li>
                                    <li class="breadcrumb-item text-dark" aria-current="page">عنا</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Hero End --> */}
          <AboutContainer />
          <TeamContainer/>
    
    </div>)
}

export default About 