import React from "react";

function ContactContainer() {
return(<div>
    <div className="container-fluid contact py-5">
<div className="container py-5">
<div className="text-center mx-auto mb-5 wow fadeIn" data-wow-delay="0.1s" >
    <p className="fs-5 text-uppercase text-primary">تواصل معنا</p>
    <h2 className="display-3">تواصل معنا للاستفسارات</h2>
        </div>
<div className="row g-4 wow fadeIn" data-wow-delay="0.3s">
    <div className="col-sm-6">
    <input type="text" className="form-control bg-transparent p-3" placeholder="اسمك"/>
    </div>
    <div className="col-sm-6">
    <input type="email" className="form-control bg-transparent p-3" placeholder="بريدك الإلكتروني"/>
    </div>
    <div className="col-12">
    <input type="text" className="form-control bg-transparent p-3" placeholder="الموضوع"/>
    </div>
    <div className="col-12">
    <textarea className="w-100 form-control bg-transparent p-3" rows="6" cols="10" placeholder="رسالتك"></textarea>
    </div>
    <div className="col-12 text-center">
    <button className="btn btn-primary border-0 py-3 px-5" type="button">إرسال الرسالة</button>
    </div>
</div>
</div>
</div>
</div>)
    
}
export default ContactContainer