import React, {Component} from 'react'

export class PersonalInfomation extends Component {
    render() {
        return(
            <div className="container" style={{margin: '50px auto'}}>
                <h1 className="text-center col-12" style={{color: '#1429D7'}}><b>Personal Information</b></h1>
                <p className="text-center col-12">Basic Information (like your name, photo, contact, etc.), you can update anytime you want</p>
                <form className="border rounded">
                    <h2 className="col-11" style={{margin: '45px auto 0px',color: '#1429D7'}}><b>Profile</b></h2>
                    <p className="col-11" style={{margin: '0px auto 15px'}}>Some information may be visible to other users in this library</p>
                    <div className="form-group">
                        <div className="row col-10 border-bottom" style={{margin: '15px auto',padding: '5px 15px'}}>
                            <div className="row col-11">
                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}><b>Photo:</b></h5>
                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>A photo helps you to personalize your account (optional)</p>
                            </div>
                            <button className="btn btn-primary border-0 col-1 col-lg-1" type="button" style={{backgroundColor: 'rgba(0,123,255,0)',color: '#1429D7',margin: '0px auto'}}>
                                <i className="fa fa-chevron-down" style={{marginLeft: 'auto'}}></i>
                            </button>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row col-10 border-bottom" style={{margin: '15px auto',padding: '5px 15px'}}>
                            <div className="row col-11">
                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}><b>Name:</b></h5>
                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>Nguyễn Văn A</p>
                            </div>
                            <button className="btn btn-primary border-0 col-1 col-lg-1" type="button" style={{backgroundColor: 'rgba(0,123,255,0)',color: '#1429D7',margin: '0px auto'}}>
                                <i className="fa fa-chevron-down" style={{marginLeft: 'auto'}}></i>
                            </button>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row col-10 border-bottom" style={{margin: '15px auto',padding: '5px 15px'}}>
                            <div className="row col-11">
                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}><b>DOB:</b></h5>
                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>January 1, 1999</p>
                            </div>
                            <button className="btn btn-primary border-0 col-1 col-lg-1" type="button" style={{backgroundColor: 'rgba(0,123,255,0)',color: '#1429D7',margin: '0px auto'}}>
                                <i className="fa fa-chevron-down" style={{marginLeft: 'auto'}}></i>
                            </button>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row col-10 border-bottom" style={{margin: '15px auto',padding: '5px 15px'}}>
                            <div className="row col-11">
                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}><b>Gender:</b></h5>
                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>Male</p>
                            </div>
                            <button className="btn btn-primary border-0 col-1 col-lg-1" type="button" style={{backgroundColor: 'rgba(0,123,255,0)',color: '#1429D7',margin: '0px auto'}}>
                                <i className="fa fa-chevron-down" style={{marginLeft: 'auto'}}></i>
                            </button>
                        </div>
                    </div>

                    <div className="form-group" style={{marginBottom: '45px'}}>
                        <div className="row col-10" style={{margin: '15px auto',padding: '5px 15px'}}>
                            <div className="row col-11">
                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}><b>Password:</b></h5>
                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>********** (Last change yesterday)</p>
                            </div>
                            <button className="btn btn-primary border-0 col-1 col-lg-1" type="button" style={{backgroundColor: 'rgba(0,123,255,0)',color: '#1429D7',margin: '0px auto'}}>
                                <i className="fa fa-chevron-down" style={{marginLeft: 'auto'}}></i>
                            </button>
                        </div>
                    </div>
                </form>

                <form className="border rounded" style={{margin: '50px 0px'}}>
                    <h2 className="col-11" style={{margin: '45px auto 0px',color: '#1429D7'}}><b>Contact Information</b></h2>
                    <div className="form-group">
                        <div className="row col-10 border-bottom" style={{margin: '15px auto',padding: '5px 15px'}}>
                            <div className="row col-11">
                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}><b>Card Number:</b></h5>
                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>ABC12345</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="row col-10 border-bottom" style={{margin: '15px auto',padding: '5px 15px'}}>
                            <div className="row col-11">
                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}><b>Email:</b></h5>
                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>1712807@student.hcmus.edu.vn</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="form-group" style={{marginBottom: '45px'}}>
                        <div className="row col-10" style={{margin: '15px auto',padding: '5px 15px'}}>
                            <div className="row col-11">
                                <h5 className="d-xl-flex align-items-xl-center col-12 col-lg-2 text-left" style={{margin: '0px'}}><b>Phone:</b></h5>
                                <p className="text-left d-xl-flex align-items-xl-center col-12 col-lg-8" style={{margin: '0px auto',marginLeft: '0px'}}>035 678 1234</p>
                            </div>
                            <button className="btn btn-primary border-0 col-1 col-lg-1" type="button" style={{backgroundColor: 'rgba(0,123,255,0)',color: '#1429D7',margin: '0px auto'}}>
                                <i className="fa fa-chevron-down" style={{marginLeft: 'auto'}}></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}