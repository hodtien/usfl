import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class Rules extends Component {
    render() {
        return(
            <div>
                <div style={{marginBottom: '20px'}}>
                    <div className="container" style={{margin: '50px auto',marginTop: '50px'}}>
                        <div className="row" style={{margin: '0px'}}>
                            <form className="border rounded col-lg-8">
                                <div className="form-group">
                                    <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>RULES</b></h2>
                                    <p className="text-justify col-11" style={{margin: '15px auto',padding: '0px 15px'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                                    </p>
                                </div>

                                <div className="form-group">
                                    <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>ABOUT</b></h2>
                                    <p className="text-justify col-11" style={{margin: '15px auto',padding: '0px 15px'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                                    </p>
                                </div>

                                <div className="form-group">
                                    <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>HISTORY</b></h2>
                                    <p className="text-justify col-11" style={{margin: '15px auto',padding: '0px 15px'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                                    </p>
                                </div>

                                <div className="form-group">
                                    <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>STAFF</b></h2>
                                    <p className="text-justify col-11" style={{margin: '15px auto',padding: '0px 15px'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                                    </p>
                                </div>

                                <div className="form-group">
                                    <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>EMPLOYMENT OPPURTUNITIES</b></h2>
                                    <p className="text-justify col-11" style={{margin: '15px auto 50px',padding: '0px 15px'}}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                                    </p>
                                </div>
                            </form>

                            <aside className="d-none d-lg-block col-lg-4" style={{margin: '0px auto',backgroundColor: '#000080',marginLeft: '0px'}}>
                                <form>
                                    <h3 style={{marginTop: '80px',marginBottom: '30px',color: '#fff',marginLeft: '10px'}}><b>MENU</b></h3>
                                </form>

                                <div className="form-group">
                                    <ul className="list-group">
                                        <li className="list-group-item" style={{backgroundColor: 'rgba(255,255,255,0)',padding: '0px'}}>
                                            <div className="border rounded border-white row col-11" style={{margin: '10px auto'}}>
                                                <i className="fa fa-info-circle d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                                                <Link to='/rules' style={{color: '#fff',fontSize: '20px'}}>About</Link>
                                            </div>
                                        </li>

                                        <li className="list-group-item" style={{backgroundColor: 'rgba(255,255,255,0)',padding: '0px'}}>
                                            <div className="border rounded border-white row col-11" style={{margin: '10px auto'}}>
                                                <i className="fa fa-book d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                                                <Link to='/rules' style={{color: '#fff',fontSize: '20px'}}>History</Link>
                                            </div>
                                        </li>

                                        <li className="list-group-item" style={{backgroundColor: 'rgba(255,255,255,0)',padding: '0px'}}>
                                            <div className="border rounded border-white row col-11" style={{margin: '10px auto'}}>
                                                <i className="fa fa-group d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                                                <Link to='/rules' style={{color: '#fff',fontSize: '20px'}}>Staff</Link>
                                            </div>
                                        </li>

                                        <li className="list-group-item" style={{backgroundColor: 'rgba(255,255,255,0)',padding: '0px'}}>
                                            <div className="border rounded border-white row col-11" style={{margin: '10px auto'}}>
                                                <i className="fa fa-user-plus d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                                                <Link to='/rules' style={{color: '#fff',fontSize: '20px'}}>Employment<br/>Oppurtunities</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}