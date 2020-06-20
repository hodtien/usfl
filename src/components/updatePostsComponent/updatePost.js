import React, {Component} from 'react'
import Updates from '../../asserts/js/updates'
import {Link} from 'react-router-dom'

export class UpdatePost extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="col-lg mt-4" style={{marginLeft: '25px', marginRight: '25px'}}>
                <div className="row" >
                    <div className="col-5" style={{padding: '0px', margin: '5px 0px'}}>
                        <img src={Updates[parseInt(this.props.serial)]} style={{width: '100%'}}/>
                    </div>
                    <div className="col-7" style={{margin: 'auto 0px'}}>
                        <Link><label className="text-left" style={{color: 'black'}}><b>{this.props.title}</b></label></Link>
                        <p className="text-justify" style={{fontSize: '14px'}}>{this.props.info}</p>
                    </div>
                </div>
            </div>
            
        )
    }
}