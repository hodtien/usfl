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
import {BorrowedBooksContainer} from './components/borrowBooksContainerComponent/borrowedBooksContainer'
import {Contact} from './components/contactComponent/contact'
import {Rules} from './components/rulesComponent/rules'
import {PersonalInfomation} from './components/personalInfomationComponent/personalInfomation'
import {ReturnBook} from './components/returnBookComponent/returnbook'
import {SignUp} from './components/signUpComponent/signUp'
import {SignIn} from './components/signInComponent/signIn'
import {SearchBar} from './components/searchBarComponent/searchBar'
import ScrollToTop from './components/scrollToTop/scrollToTop'
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
        this.state = {
            signInStatus: false,
            showSearchBar: false
        }
        this.onHandleClick = this.onHandleClick.bind(this)
        this.showSearchBar = this.showSearchBar.bind(this)
    }

    onHandleClick() {
        const newSignIn = this.state.signInStatus
        this.setState({signInStatus: !newSignIn})
    }

    showSearchBar() {
        const newStatus = this.state.showSearchBar
        this.setState({showSearchBar: !newStatus})
    }

    render() {
        let status = false
        return(
            <Router>
                <ScrollToTop>
                    <div className="App">
                        
                        <Header signIn={this.state.signInStatus} click={this.onHandleClick} change={this.showSearchBar} status={!this.state.showSearchBar}/>
                        <SearchBar format='false' status={this.state.showSearchBar} change={this.showSearchBar}/>
                        <NavBar/>
                        <main>        
                            <Route exact path="/contents">
                                <SlideImagesContainer/>
                                <BookContainer lineStyle='1' title='Popular Books' tag='none'/>
                                <BookContainer lineStyle='2' title='Books' tag='lập trình'/>
                                <BookContainer lineStyle='3' title='Books' tag='lịch sử'/>
                                <BookContainer lineStyle='1' title='Books' tag='tiếng Anh'/>
                            </Route>

                            <Route exact path="/rules">
                                <Rules/>
                            </Route>

                            <Route exact path="/contact">
                                <Contact/>
                            </Route>

                            <Route exact path="/search">
                                <Search searchText='TRÍ TUỆ NHÂN TẠO' tag='AI'/>
                            </Route>

                            <Route exact path="/book-detail">
                                <BookDetail serial='0' title='Kỷ nguyên Trí tuệ nhân tạo' sku='4565827080162' view='1.352' status='IN STOCK' author='Nhiều tác giả' publisher='Nhà xuất bản Hồng Đức' page='350' language='Vietnamese' type='Paperback' availability='10' tag={['AI', '4.0', 'Robot']} rates='10' content='Trong cuộc sống hàng ngày của mỗi chúng ta, có bao nhiêu thời gian được dùng cho những công việc mưu sinh mang tính lặp đi lặp lại buồn tẻ, có bao nhiêu thời gian dùng cho việc đọc sách, học tập, sáng tạo, tư duy, giải trí và hưởng thụ? Một ngày của nhân viên văn phòng thành phố, ngoài thời gian dành cho ngủ nghỉ, thì có hơn 60% thời gian dành để cho giao tiếp xã giao và xử lý những công việc...' signIn={this.state.signInStatus}/>
                            </Route>

                            <Route exact path="/sign-up">
                                <SignUp click={this.onHandleClick}/>
                            </Route>

                            <Route exact path="/sign-in">
                                <SignIn click={this.onHandleClick}/>
                            </Route>

                            <Route exact path="/profile">
                                <PersonalInfomation/>
                            </Route>

                            <Route exact path="/my-book">
                                <BorrowedBooksContainer />
                            </Route>

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
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" style={{display: 'none'}}>
                        Learn React
                    </a>
                </ScrollToTop>
            </Router>
        )
    }
}
/*export function App() {
    let signIn = false
    return(
        <Router>
            <div className="App">
                <BorrowedBooksContainer/>
                
                <Header/>
                <NavBar/>
                <main>        
                    <Route exact path="/contents">
                        <SlideImagesContainer/>
                        <BookContainer lineStyle='1' title='Popular Books' tag='none'/>
                        <BookContainer lineStyle='2' title='Books' tag='lập trình'/>
                        <BookContainer lineStyle='3' title='Books' tag='lịch sử'/>
                        <BookContainer lineStyle='1' title='Books' tag='tiếng Anh'/>
                    </Route>

                    <Route exact path="/rules">
                        <Rules/>
                    </Route>

                    <Route exact path="/contact">
                        <Contact/>
                    </Route>

                    <Route exact path="/search">
                        <Search searchText='TRÍ TUỆ NHÂN TẠO' tag='AI'/>
                    </Route>

                    <Route exact path="/book-detail">
                        <BookDetail serial='0' title='Phát Triển Web Cho Smartphone' sku='9552147738847' view='1.352' status='IN STOCK' author='Gail Rahn Frederick and Rajash Lai' publisher='Bách khoa Hà Nội' page='350' language='Vietnamese' type='Paperback' availability='10' tag={['lập trình', 'lập trình web', 'smartphone']} rates='10' content='Khi ngày càng nhiều người truy cập Web từ điện thoại và các thiết bị di động khác, các nhà phát triển Web cần biết cách xây dựng trang Web có khả năng đáp ứng tốt cho các thiết bị này. Muốn vây, họ cần học những kỹ thuật, nghiên cứu những vấn đề mang tính đặ thù liên quan tới việc phân phối nội dung Web cho thiết bị di động. Nếu bạn là nhà phát triển và thiết kế Web đang bắt đầu tìm hiểu về Web trên di động thì đây chính là cuốn sách dành cho bạn...' signIn={signIn}/>
                    </Route>

                    <Route exact path="/sign-up">
                        
                    </Route>

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
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" style={{display: 'none'}}>
                Learn React
            </a>
        </Router>
    )
}*/
