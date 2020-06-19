import React, { Component } from 'react';
import {Header} from './components/headerComponent/header'
import {Footer} from './components/footerComponent/footer'
import {NavBar} from './components/navbarComponent/navbar'
import {BookContainer} from './components/booksContainerComponent/booksContainer'
import {EventsContainer} from './components/eventsContainerComponent/eventsContainer'
import {Search} from './components/searchComponent/search'
import {BookDetail} from './components/bookDetailComponent/bookDetail'
import {BlogsContainer} from './components/blogsContainerComponent/blogsContainer'
import {UpdatePostsContainer} from './components/updatePostsContainerComponent/updatePostsContainer'
import {SlideImagesContainer} from './components/slideImagesContainerComponent/slideImagesContainer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import LibraryImage from './asserts/img/library.jpg'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {signIn: false}
    }

    render() {
        return (
        <Router>
            <div className="App"> 
            
            <Header signIn={this.state.signIn}/>
            <NavBar/>
            <main>        
                <Route exact path="/contents">
                    <SlideImagesContainer/>
                    <BookContainer lineStyle='1' title='Popular Books' tag='none'/>
                    <BookContainer lineStyle='2' title='Books' tag='lập trình'/>
                    <BookContainer lineStyle='3' title='Books' tag='lịch sử'/>
                    <BookContainer lineStyle='1' title='Books' tag='tiếng Anh'/>
                </Route>

                <Route exact path="/rules" component={Rules}></Route>

                <Route exact path="/contact" component={Contact}></Route>

                <Route exact path="/search">
                    <Search searchText='TRÍ TUỆ NHÂN TẠO' tag='AI'/>
                </Route>

                <Route exact path="/book-detail">
                    <BookDetail serial='0' title='Phát Triển Web Cho Smartphone' sku='9552147738847' view='1.352' status='IN STOCK' author='Gail Rahn Frederick and Rajash Lai' publisher='Bách khoa Hà Nội' page='350' language='Vietnamese' type='Paperback' availability='10' tag={['lập trình', 'lập trình web', 'smartphone']} rates='10' content='Khi ngày càng nhiều người truy cập Web từ điện thoại và các thiết bị di động khác, các nhà phát triển Web cần biết cách xây dựng trang Web có khả năng đáp ứng tốt cho các thiết bị này. Muốn vây, họ cần học những kỹ thuật, nghiên cứu những vấn đề mang tính đặ thù liên quan tới việc phân phối nội dung Web cho thiết bị di động. Nếu bạn là nhà phát triển và thiết kế Web đang bắt đầu tìm hiểu về Web trên di động thì đây chính là cuốn sách dành cho bạn...' signIn={this.state.signIn}/>
                </Route>

                <Route exact path="/sign-up" component={PersonalInformation}></Route>

                <Route exact path="/">
                    <SlideImagesContainer/>
                    <EventsContainer title='Upcoming Events and Announcements'/>
                    <BlogsContainer title='Top picks'/>
                    <BookContainer lineStyle='3' title='New and Noteworthy' tag='none'/>
                    <UpdatePostsContainer title='Updates'/>
                </Route>
                
            </main>
            <Footer/>
        
            </div>
        </Router>
        )
    }
}

function Contact() {
  return (
    <div>
      <div style={{marginBottom: '20px'}}>
        <div className="container" style={{margin: '50px auto',marginTop: '50px'}}>
          <div className="row" style={{margin: '0px'}}>
            <form className="border rounded col-lg-8">
              <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>CONTACT</b></h2>
              <div className="row col-11" style={{margin: '15px auto',padding: '0px'}}>
                <div className="form-group d-inline-block col-12 col-lg-6" style={{margin: '15px 0px',marginBottom: '0px'}}>
                  <input className="form-control" type="text" placeholder="*First Name" required=""/>
                </div>
                <div className="form-group d-inline-block col-12 col-lg-6" style={{margin: '15px 0px',marginBottom: '0px'}}>
                  <input className="form-control" type="text" placeholder="*Last Name" required=""/>
                </div>
              </div>

              <div className="form-group d-block d-xl-flex col-11" style={{margin: '15px auto'}}>
                <input className="form-control" type="text" placeholder="*Library Card Number" required="" minLength="7"/>
              </div>

              <div className="form-group d-block col-11" style={{margin: '15px auto'}}>
                <input className="form-control" type="text" placeholder="Email Address" required=""/>
              </div>

              <div className="form-group d-block col-11" style={{margin: '15px auto'}}>
                <input className="form-control" type="text" placeholder="Phone"/>
              </div>

              <div className="form-group d-block col-11" style={{margin: '15px auto'}}>
                <input className="form-control" type="text" placeholder="*Title" required=""/>
              </div>

              <div className="form-group d-block col-11" style={{margin: '15px auto'}}>
                <textarea className="form-control" placeholder="*Message" required="" style={{height: '200px'}}/>
              </div>

              <button className="btn btn-primary border-0 rounded-pill mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}}>
                <b>Submit</b>
              </button>
            </form>

            <aside className="d-none d-lg-block col-lg-4 shadow rounded" style={{margin: '0px auto',backgroundColor: '#000080',marginLeft: '0px'}}>
            <form>
              <h3 style={{marginTop: '80px',marginBottom: '30px',color: '#fff',marginLeft: '10px'}}><b>HOW DO I?</b></h3>
            </form>
            <div className="form-group">
              <ul className="list-group">
                <li className="list-group-item" style={{backgroundColor: 'rgba(255,255,255,0)',padding: '0px'}}>
                  <div className="border rounded border-white row col-11" style={{margin: '20px auto'}}>
                    <i className="fa fa-id-card-o d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                    <Link style={{color: '#fff',fontSize: '20px'}}>Get A Card</Link>
                  </div>

                  <div className="border rounded border-white row col-11" style={{margin: '20px auto'}}>
                    <i className="fa fa-user-circle-o d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                    <Link style={{color: '#fff',fontSize: '20px'}}>Manage My Account</Link>
                  </div>

                  <div className="border rounded border-white row col-11" style={{margin: '20px auto'}}>
                    <i className="fa fa-print d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                    <Link style={{color: '#fff',fontSize: '20px'}}>Print From Anywhere</Link>
                  </div>

                  <div className="border rounded border-white row col-11" style={{margin: '20px auto'}}>
                    <i className="fa fa-question-circle-o d-lg-flex d-xl-flex align-items-lg-center align-items-xl-center" style={{marginRight: '10px',color: '#fff',fontSize: '20px'}}></i>
                    <Link style={{color: '#fff',fontSize: '20px'}}>Get Help</Link>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
          </div>
        </div>
      </div>

      <div style={{marginTop: '20px'}}>
        <div className="container" style={{margin: '50px auto'}}>
          <form className="border rounded col-lg-8">
            <h2 className="col-11" style={{color: '#1429D7',margin: '45px auto 15px',padding: '0px 15px'}}><b>HOURS &amp; LOCATION</b></h2>
            <div className="row col-11" style={{margin: '15px auto'}}>
              <img src={LibraryImage} className="col-8 col-lg-5" style={{margin: '15px auto',marginTop: '15px',height: '350px'}}/>
              <div className="col-12 col-lg-7" style={{margin: '30px auto'}}>
                <div className="form-group col-12">
                  <h3><b>Hours</b></h3>
                  <p>Monday - Friday: 7a.m - 5p.m<br/>Saturday: 7a.m - 11a.m<br/>Sunday: closed</p>
                </div>

                <div className="form-group col-12">
                  <h3><b>Phone</b></h3>
                  <p>028 6288 4499</p>
                </div>

                <div className="form-group col-12">
                  <h3><b>Address</b></h3>
                  <p style={{margin: '0px'}}>227 Nguyen Van Cu Street, Ward 4, District 5, HCMC</p>
                  <Link>Get Direction</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    

    
  )
}

function Rules() {
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
                            <p className="text-justify col-11" style={{margin: '15px auto',padding: '0px 15px'}}>
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

function PersonalInformation() {
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

