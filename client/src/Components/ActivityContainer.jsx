import React from "react";

function ActivityContainer() {
return(<div>
    <div className="container-fluid activities py-5" dir="rtl">
        <div className="container py-5">
            <div className="mx-auto text-center mb-5 wow fadeIn" data-wow-delay="0.1s">
                <p className="fs-5 text-uppercase text-primary">الأنشطة</p>
                <h1 className="display-3">أنشطتنا</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-6 col-xl-4">
                    <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.1s">
                        <i className="fa fa-Sabeel fa-4x text-dark"></i>
                        <div className="ms-4">
                            <h4> تفسير القران الكريم</h4>
                            <p className="mb-4">
                                اعطنا سؤالك و سوف نخببرك بالاجابه من تفسير القران
                            </p>
                            <a href="/QA" className="btn btn-primary px-3">اقرأ المزيد</a>
                        </div>
                    </div>
                </div>
             
                <div className="col-lg-6 col-xl-4">
                    <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.1s">
                        <i className="fa fa-book fa-4x text-dark"></i>
                        <div className="ms-4">
                            <h4 >معلومات عن السور </h4>
                            <p className="mb-4">
                                اكتب اسم السوره بلغه عربيه صحيحه و سيساعدك سبيل في معرفه كل المعلومات عنها  
                            </p>
                            <a href="/QuranSearch" className="btn btn-primary px-3">اقرأ المزيد</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4">
                    <div className="activities-item p-4 wow fadeIn" data-wow-delay="0.1s">
                        <i className="fa fa-book fa-4x text-dark"></i>
                        <div className="ms-4">
                            <h4> كتب تفسير</h4>
                            <p className="mb-4">
                                ابحث عن كتاب ليساعدك علي تفسير القران  
                            </p>
                            <a href="/TafseerBook" className="btn btn-primary px-3">اقرأ المزيد</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>)
    
}
export default ActivityContainer