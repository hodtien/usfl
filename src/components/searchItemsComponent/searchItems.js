import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookImage from '../../asserts/js/images'

export class SearchItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid mb-3 shadow" style={{borderTop: '1px solid #1429D7', borderBottom: '1px solid #1429D7'}}>
                <div className="container row mt-3 mb-3" style={{margin: '0px auto'}}>
                    <div className="col-7 col-sm-3" style={{margin: '0px auto'}}>
                        <img src={BookImage[parseInt(this.props.serial)]} style={{width: '70%', height: '250px'}}/>
                    </div>

                    <div className="col-sm-9">
                        <div className="row mt-4">
                            <div className="col-sm-9 mb-2 text-md-left">
                                <Link to='/book-detail'><h4 style={{color: 'black'}}><b>{this.props.title}</b></h4></Link>
                                <label style={{color: '#027DB4'}}><b>{this.props.author}</b></label>
                            </div>
                            <Link to="/book-detail" className="col-sm-3 mb-2" style={{color: '#027DB4', textAlign: 'right',fontSize:'15px'}}>See Detail</Link>
                            <div className="col-sm-12">
                                <i className="fa fa-star checked float-left" style={{color: '#1429D7'}}></i>
                                <i className="fa fa-star checked float-left" style={{color: '#1429D7'}}></i>
                                <i className="fa fa-star checked float-left" style={{color: '#1429D7'}}></i>
                                <i className="fa fa-star checked float-left" style={{color: '#1429D7'}}></i>
                                <i className="fa fa-star float-left" style={{color: '#1429D7'}}></i>
                                <span className="ml-5 float-right">({this.props.rates} ratings)</span>
                            </div>

                            <div className="col-sm-12 mt-3 text-left"><b>Availability:</b>&nbsp;{this.props.availability}</div>
                            <div className="col-sm-12 mt-2 text-left"><b>Short intro:</b>&nbsp;{this.props.summary}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}