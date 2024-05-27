import React from "react";

function Header() {
    return(<div>
    <div className="container-fluid fixed-top" dir="rtl">

        <div className="container topbar d-none d-lg-block">
            <div className="topbar-inner">
                <div className="row gx-0">
                    <p >استكشف منصة التفسير القرآني الشامل وتقييم مهارات الحفظ</p>
                </div>
            </div>
        </div>

        <div className="container">
            <nav className="navbar navbar-light navbar-expand-lg py-3">
                <a href="/" className="navbar-brand">
                    <h1 className="mb-0"><span className="text-primary" >سبيل</span></h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars text-primary"></span>
                </button>
                <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                    <div className="navbar-nav ms-lg-auto mx-xl-auto">
                        <a href="/" className="nav-item nav-link active">الرئيسية</a>
                        <a href="/about" className="nav-item nav-link">عنا</a>
                        <a href="/activity" className="nav-item nav-link">الأنشطة</a>
                        
                        
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">صفحات</a>
                            <div className="dropdown-menu m-0 rounded-0">
                                
                                <a href="/QA" className="dropdown-item">اسأل سؤال</a>
                                <a href="/QuranSearch" className="dropdown-item">معلومات عن السور</a>
                                <a href="/TafseerBook" className="dropdown-item">كتب التفسير</a>
                                
                                

                            </div>
                        </div>
                    </div>
                
                </div>
            </nav>
        </div>

    </div>
    </div>)
    
}
export default Header