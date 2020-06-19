import React, {Component} from 'react'
import {Event} from '../eventsComponent/event'

export class EventsContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container-fluid" style={{margin: '25px 0px'}}>
                <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
                    <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid #1429D7',color: '#1429D7', padding: '0px'}}>
                        <label>
                            <b>{this.props.title}</b>
                        </label>
                    </div>

                    <Event serial='0' title='Library Closured Because of the Coronavirus (COVID-19)'/>
                    <Event serial='1' title='More Book More Fun Keeping Streak With Us'/>
                    <Event serial='2' title='Happy Lunar New Year 2020'/>
                </div>

                <button className="btn btn-primary border-0 rounded-pill mt-4 mb-4" style={{backgroundColor: '#F15922',height: '40px',width: '150px',margin: '0px auto'}}>
                    <b>...See More</b>
                </button>
            </div>
        )
    }
}