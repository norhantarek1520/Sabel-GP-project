import React from "react";
import ActivityContainer from "../Components/ActivityContainer";
import AboutContainer from "../Components/AboutContainer";
import ContactContainer from "../Components/ContactContainer";
import TeamContainer from "../Components/TeamContainer"
function Home(){
return(
<div>

    {/* Start Hero */}
    <div className="container-fluid hero-header">
        <div className="container">
            <div className="row">
            <div className="col-lg-7">
                <div className="hero-header-inner animated zoomIn">
                <p className="text-dark">مرحباً بكم في سبيل</p>  <h2 className="display-5 mb-5 text-dark">
                    استكشف أعماق القرآن الكريم
                </h2>  <a href="/QA" className="btn btn-primary py-3 px-5">اطرح سؤالاً</a>  </div>
            </div>
            </div>
        </div>
    </div> 
    {/* end Hero */}

    <AboutContainer />
    <ActivityContainer />
    <TeamContainer />
   

            
    
</div>)
}

export default Home 