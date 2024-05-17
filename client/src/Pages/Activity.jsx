import React from "react";
import ActivityContainer from "../Components/ActivityContainer";
function Activity(){
    return(<div>
           {/* <!-- Hero Start --> */}
        <div class="container-fluid hero-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="hero-header-inner animated zoomIn">
                            <h1 class="display-1 text-dark">انشطتنا</h1>
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item"><a href="#">الرئيسيه</a></li>
                              
                                <li class="breadcrumb-item text-dark" aria-current="page">انشطتنا</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* <!-- Hero End --> */}
    <ActivityContainer />
    
    </div>)
}

export default Activity 