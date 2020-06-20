import React, {Component} from 'react'
import {Blog} from '../blogsComponent/blog'
import { Link } from 'react-router-dom'

export class BlogsContainer extends Component {
    render() {
        return (
            <div className="container-fluid" style={{backgroundColor: 'rgba(20, 41, 215, 0.68)', color: 'white', margin: '25px 0px'}}>
                <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
                    <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid white'}}>
                        <label className="col-12" style={{padding: '0px'}}>
                            <b>{this.props.title}</b>
                        </label>
                    </div>

                    <Blog serial='0' title='Nhập môn lập trình' text='Khởi đầu của giấc mơ lập trình viên trong tôi. Đây là cuốn sách đầu tiên khi tôi bước chân vào môi
                    trường đại học nói chung và ngành Công nghệ Thông tin nói riêng.' userName='hdtien'/>
                    <Blog serial='1' title='CTDL và GT' text='Giấc mơ của tôi bắt đầu từ điều "phi thường". Đây là cuốn sách tôi tâm đắc nhất trong số sách mà
                    tôi có. Dù như thế nào thì hành trang của tôi không thể thiếu cuốn sách này.' userName='ntmthuy'/>
                </div>
            
                <Link>
                    <button className="btn btn-primary border-0 rounded-pill mt-4 mb-4" style={{backgroundColor: '#F15922',height: '40px',width: '150px',margin: '0px auto'}}>
                        <b>...See More</b>
                    </button>
                </Link>
            </div>
        )
    }
}