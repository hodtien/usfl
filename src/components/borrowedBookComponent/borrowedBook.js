import React, {Component} from 'react'
import BookImage from '../../asserts/js/images'

export class BorrowedBook extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const status = this.props.status == 'Borrowing'
        let textColor, info
        if (status) {
            textColor = {color: '#FB0000'}
            info = 'Expire in:'
        }
        else {
            textColor = {color: '#1429D7'} 
            info = 'Returned Date:'
        }
        return (
            <div className="row col-lg-6 rounded" style={{margin: '0px auto', padding: 0, border: '1px solid #1429D7'}}>
                <div className="col-5 col-sm-4 col-md-3 col-lg-4 col-xl-3" style={{margin: 'auto 0px'}}>
                    <img src={BookImage[0]} style={{width: '100%'}}/>
                </div>

                <div className="col-7 col-sm-8 col-md-9 col-lg-8 col-xl-9" style={{padding: 0}}>
                    <div className="row">
                        <div className="col-12 mt-4 text-left" style={{fontSize: '18px'}}>
                            <label><b>CHẠY ĐUA VỚI ROBOT</b></label>
                        </div>
                        <div className="row col-12">
                            <div className="col-11 col-md-9 col-lg-8 text-left" style={{fontSize: '12px'}}>
                                <label>SKU: {this.props.sku}</label>
                            </div>
                            <button className="col-11 col-md-3 col-lg-4 btn btn-primary border-0 rounded-0" style={{margin: '0px auto',backgroundColor: '#F15922', fontSize:'12px'}}>
                                <b>{this.props.stock}</b>
                            </button>
                        </div>

                        <div className="row col-12 mt-4">
                            <div className="col-6 col-md-5 text-left">
                                <span>Status:</span>
                            </div>

                            <div className="col-6 col-md-7 text-left">
                                <span style={textColor}><b>{this.props.status}</b></span>
                            </div>
                        </div>

                        <div className="row col-12 mt-1">
                            <div className="col-6 col-md-5 text-left">
                                <span>Borrowed Date: </span>
                            </div>
                            <div className="col-6 col-md-7 text-left">
                                <span>{this.props.date}</span>
                            </div>
                        </div>

                        <div className="row col-12 mt-1">
                            <div className="col-6 col-md-5 text-left">
                                <span>{info}</span>
                            </div>
                            {status?
                            <div className="col-6 col-md-7 text-left">
                                <span>{this.props.expire} days</span>
                            </div>
                            : 
                            <div className="col-6 col-md-7 text-left">
                                <span>{this.props.returned}</span>
                            </div>}
                        </div>

                        {status?
                        <button className="col-5 col-lg-4 btn btn-primary border-0 rounded-pill mt-2 mb-4 float-right" type='button' style={{color: 'white',backgroundColor: '#1429D7',height: '40px',margin: '0px auto'}}><b>Return</b></button>
                        :
                        <button className="col-5 col-lg-4 btn btn-primary border-0 rounded-pill mt-2 mb-4 float-right" type='button' style={{color: 'white',backgroundColor: '#1429D7',height: '40px',margin: '0px auto', visibility: 'hidden'}}><b>Return</b></button> }
                    </div>
                </div>
            </div>
        )
    }
}