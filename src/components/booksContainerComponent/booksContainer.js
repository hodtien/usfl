import React, {Component} from 'react'
import {BookCard} from '../bookCardComponent/bookCard'

const style1 = {
    backgroundColor: 'white',
    color: '#1429D7',
    margin: '25px 0px'
}

const style2 = {
    backgroundColor: 'rgba(20, 41, 215, 0.68)',
    color: 'white',
    margin: '25px 0px'
}

const style3 = {
    backgroundColor: 'rgba(20, 41, 215, 0.85)',
    color: 'white',
    margin: '25px 0px'
}

export class BookContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const tag = (this.props.tag == 'none')
        let lineStyle, fontColor, borderTopColor
        if (this.props.lineStyle == '1') {
            lineStyle = style1
            borderTopColor = {borderTop: '3px solid #1429D7'}
            fontColor = {color: 'black'}
        }
        else if (this.props.lineStyle == '2') {
            lineStyle = style2
            borderTopColor = {borderTop: '3px solid white'}
            fontColor = {color: 'white'}
        }
        else {
            lineStyle = style3
            borderTopColor = {borderTop: '3px solid white'}
            fontColor = {color: 'white'}
        }

        return (
            <div className="container-fluid" style={lineStyle}>
                <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
                    <div className="col-12 col-lg-2 mt-4" style={borderTopColor}>
                        <label className="col-12" style={{padding: '0px'}}>
                            <b>{this.props.title}</b>
                        </label>

                        {tag?
                           <noscript></noscript> 
                        : <button className="btn btn-primary border-0 col-4 col-lg-12" style={{backgroundColor: '#F15922'}}>
                            <b>{this.props.tag}</b>
                        </button>}
                    </div>

                    <BookCard serial='0' title='Kỷ nguyên Trí tuệ Nhân tạo' fontColor={fontColor}/>
                    <BookCard serial='1' title='Chạy đua với Robot' fontColor={fontColor}/>
                    <BookCard serial='2' title='Năm 2062 Thời đại của trí thông minh nhân tạo' fontColor={fontColor}/>
                    <BookCard serial='3' title='The A.I. Age' fontColor={fontColor}/>
                </div>

                <button className="btn btn-primary border-0 rounded-pill mt-4 mb-4" style={{backgroundColor: '#F15922',height: '40px',width: '150px',margin: '0px auto'}}>
                    <b>...See More</b>
                </button>
            </div>
            
        )
    }
}