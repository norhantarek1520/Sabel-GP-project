import React from "react";

function TeamContainer() {
  return (
    <div className="container-fluid team py-5" dir="rtl">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s">
          <h1 className="display-3">فريقنا</h1>
        </div>

        {/* Single row with team members */}
        <div className="row">
          <div className="d-flex"> {/* Main container for team members */}
          <div className="team-item mr-4"> 
              <img
                src="../../assets/img/team/Nourhan.jpg"
                alt="Team Member Name"
                className="img-fluid rounded-circle mb-3 team-member-image"
              />
              <h2>Nourahn Tarek </h2>
              <p>Backend Developer </p>
            </div> 
            <div className="team-item mr-4"> 
              <img
                src="../../assets/img/team/mostafa.png"
                alt="Team Member Name"
                className="img-fluid rounded-circle mb-3 team-member-image"
              />
              <h2>Mostafa Gamal </h2>
              <p>data scientist</p>
            </div>
            
            <div className="team-item mr-4">
              <img
                src="../../assets/img/team/Sara.png"
                alt="Team Member Name"
                className="img-fluid rounded-circle mb-3 team-member-image"
              />
              <h2>Sara waled </h2>
              <p>Backend Developer</p>
            </div>
            <div className="team-item mr-4"> 
              <img
                src="../../assets/img/team/mahoud.png"
                alt="Team Member Name"
                className="img-fluid rounded-circle mb-3 team-member-image"
              />
              <h2>Mahmoud Haney </h2>
              <p>Backend Developer</p>
            </div>
            <div className="team-item"> 
              <img
                src="../../assets/img/team/amera.png"
                alt="Team Member Name"
                className="img-fluid rounded-circle mb-3 team-member-image"
              />
              <h2>Amera osama </h2>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamContainer;
