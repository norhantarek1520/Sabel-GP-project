import React from "react";
import TeamContainer from "../Components/TeamContainer";
function Team(){
    return(<div>
        <div class="container-fluid hero-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="hero-header-inner animated zoomIn">
                            <h1 class="display-1 text-dark">فريقنا</h1>
                            <ol class="breadcrumb mb-0">
                                <li class="breadcrumb-item"><a href="#">الرئيسيه</a></li>
                                <li class="breadcrumb-item"><a href="#">الصفحات</a></li>
                                <li class="breadcrumb-item text-dark" aria-current="page">فريقنا</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TeamContainer />
    </div>)
}

export default Team 