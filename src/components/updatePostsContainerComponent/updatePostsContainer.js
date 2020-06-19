import React, {Component} from 'react'
import {UpdatePost} from '../updatePostsComponent/updatePost'

export class UpdatePostsContainer extends Component {
    render() {
        return (
            <div className="container-fluid" style={{backgroundColor: 'white', color: 'black', margin: '25px 0px'}}>
                <div className="container row" style={{backgroundColor: 'transparent',margin: '0px auto'}}>
                    <div className="col-12 col-lg-2 mt-4" style={{borderTop: '3px solid #1429D7'}}>
                        <label className="col-12" style={{padding: '0px', color: '#1429D7'}}>
                            <b>{this.props.title}</b>
                        </label>
                    </div>

                    <UpdatePost serial='0' title='Coronavirus (COVID-19) Information' info='Find out what you should do during quarantine and our temporary closure'/>
                    <UpdatePost serial='1' title='Library Card Updated' info='Find out what is new in your online library card'/>
                </div>

                <button className="btn btn-primary border-0 rounded-pill mt-4 mb-4" style={{backgroundColor: '#F15922',height: '40px',width: '150px',margin: '0px auto'}}>
                    <b>...See More</b>
                </button>
            </div>
        )
    }
}