import React, {Component} from 'react'
import {SearchItem} from '../searchItemsComponent/searchItems'
import {Link} from 'react-router-dom'

export class Search extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="container mt-4 mb-4">
                    <div className="row ml-3">
                        <label className=" col-4 col-lg-3 col-xl-2 text-md-left">You search for:</label>
                        <h5 className="col-8 col-lg-9 col-xl-10" style={{textAlign: 'left'}}><b>{this.props.searchText}</b></h5>

                        <div className="col-4 col-lg-3 col-xl-2 text-md-left" style={{padding: '5px 15px'}}>
                            <label style={{marginTop: 'auto', marginBottom: 'auto', borderBottom: '2px solid #1429D7'}}>Search by category:</label>
                        </div>

                        <Link to="/search">
                            <button className="btn btn-primary border-0 rounded-0" style={{margin: '0px 15px',backgroundColor: '#F15922'}}>
                                <b>{this.props.tag}</b>
                            </button>
                        </Link>
                    </div>         
                </div>

                <SearchItem serial="0" title="Kỷ nguyên Trí tuệ Nhân tạo" author="Nhiều tác giả" rates="10" availability="20" summary="Lorem ipsum, dolor sit amet consectetur adipisicing..."/>
                <SearchItem serial="1" title="Chạy đua với Robot" author="Joseph E. Aoun" rates="10" availability="20" summary="Lorem ipsum, dolor sit amet consectetur adipisicing..."/>
                <SearchItem serial="2" title="Năm 2062 Thời đại của trí thông minh nhân tạo" author="Toby Walsh" rates="10" availability="20" summary="Lorem ipsum, dolor sit amet consectetur adipisicing..."/>
                <SearchItem serial="3" title="The A.I. Age" author="Adam Riccoboni" rates="10" availability="20" summary="Lorem ipsum, dolor sit amet consectetur adipisicing..."/>
                <SearchItem serial="3" title="The A.I. Age" author="Adam Riccoboni" rates="10" availability="20" summary="Lorem ipsum, dolor sit amet consectetur adipisicing..."/>
                <SearchItem serial="3" title="The A.I. Age" author="Adam Riccoboni" rates="10" availability="20" summary="Lorem ipsum, dolor sit amet consectetur adipisicing..."/>

                <button className="btn btn-primary border-0 rounded-pill mt-4 mb-4" style={{backgroundColor: '#F15922',height: '40px',width: '150px',margin: '0px auto'}}>
                    <b>...See More</b>
                </button>
            </div>
            
        )
    }
}