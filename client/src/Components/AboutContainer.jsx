import React from "react";

function AboutContainer() {
    return(<div>
       <div className="container-fluid about py-5" dir="rtl">
    <div className="container py-5">
        <div className="row g-5 mb-5">
            <div className="col-xl-6">
                <div className="row g-4">
                    <div className="col-6">
                        {/* sabel\public\assets */}
                        <img src="../../assets/img/about-2.jpg" className="img-fluid h-100 wow zoomIn" data-wow-delay="0.1s"alt=""/>
                    </div>
                    <div className="col-6">
                        <img src="../../assets/img/events-3.jpg" className="img-fluid pb-3 wow zoomIn" data-wow-delay="0.1s"
                            alt=""/>
                        <img src="../../assets/img/blog-mini-1.jpg" className="img-fluid pt-3 wow zoomIn" data-wow-delay="0.1s"
                            alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-xl-6 wow fadeIn" data-wow-delay="0.5s">
                <h1 className="fs-5 text-uppercase text-primary">عن سبيل</h1> 
                <h1 className="display-5 pb-4 m-0">فمن سلك طريقًا يلتمس فيها علمًا سهّل الله له طريق الآخرة</h1>
                <p className="pb-4">
                    تعمق في محيط حكمة القرآن، حيث كل آية كدرة من الهداية تضيء طريقنا.
                </p>
                <div className="row g-4 mb-4">
                    <div className="col-md-6">
                        <div className="ps-3 d-flex align-items-center justify-content-end">
                            <span className="bg-primary btn-md-square rounded-circle mt-4 me-2"><i
                                    className="fa fa-eye text-dark fa-4x mb-5 pb-2"></i></span>
                            <div className="ms-4">
                                <h5>رؤيتنا</h5>
                                <p>
                                    فهم القرآن الكريم رحلة استنارة تؤدي إلى النمو الروحي والارشاد.
                                </p>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ps-3 d-flex align-items-center justify-content-end">
                            <span className="bg-primary btn-md-square rounded-circle mt-4 me-2"><i
                                    className="fa fa-flag text-dark fa-4x mb-5 pb-2"></i></span>
                            <div className="ms-4">
                                <h5>رسالتنا</h5>
                                <p>
                                    جعل الجميع يستكشف القرآن الكريم.
                                </p>
                                </div>
                        </div>
                    </div>
                </div>
                <div className="bg-light p-3 mb-4">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-3">
                            <img src="../../assets/img/about-child.jpg" className="img-fluid rounded-circle" alt=""/>
                        </div>
                        <div className="col-6">
                            <p className="mb-0">
                                نعتز بالقرآن كمصدر نهائي للنور والهداية،
                                يرشدنا عبر تعقيدات الحياة.
                            </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container text-center bg-primary py-5 wow fadeIn" data-wow-delay="0.1s" dir="rtl">
            <div className="row g-4 align-items-center">
                <div className="col-lg-3">
                    <i className="fa fa-mosque fa-5x text-white"></i>
                </div>
                <div className="col-lg-7 text-center text-lg-end">
                    <h1 className="mb-0" >  الفهم الصحيح للقرآن رحلة نحو الإضاءة، تقود إلى النمو الروحي والهداية</h1>
                </div>
                <div className="col-lg-2">
                    <i className="fa fa-mosque fa-5x text-white"></i>
                </div>
            </div>
        </div>
    </div> 
</div>  
    </div>)
    
}
export default AboutContainer