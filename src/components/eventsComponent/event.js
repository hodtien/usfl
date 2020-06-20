import React, {Component} from 'react'
import EventsImage from '../../asserts/js/eventsImage'
import {
    Link
} from 'react-router-dom'

export class Event extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-12 col-md mt-4">
                <div className="card col-12" style={{backgroundColor:'transparent',border:'none'}}>
                    <div><img src={EventsImage[parseInt(this.props.serial)]} style={{width: '100%',height:'190px'}}/></div>
                    <div className="mt-2"><Link style={{color: 'black'}}><b>{this.props.title}</b></Link></div>
                </div>
            </div>
        )
    }
}