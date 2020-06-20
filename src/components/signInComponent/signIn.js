import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logoSmall from '../../asserts/img/library-logo-sm.png';

export class SignIn extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <div style={{marginBottom: '20px'}}>
                    <div className="container" style={{margin: '50px auto',marginTop: '50px'}}>
                        <div className="row" style={{margin: '0px'}}>
                            <ul className="nav nav-tabs col-12 col-lg-10" style={{margin:'0px auto'}}>
                                <li className="col nav-item">
                                    <Link to="/sign-in" className="nav-link active" style={{color: 'black'}}><h4>Sign in</h4></Link>
                                </li>
                                <li className="col nav-item">
                                    <Link to="/sign-up" className="nav-link" style={{color: '#1429D7'}}><h4>Sign up</h4></Link>
                                </li>
                            </ul>
                        </div>

                        <form className="col-10 col-lg-8 mt-4" style={{margin: '15px auto 0px',padding: '15px 0px'}}>
                            <img src={logoSmall} style={{width: '200px', margin: '0px auto'}}/>
                            <div className="form-group row">
                                <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Email:</b></h6>
                                <input className="form-control col-lg-9 col-xl-10" type="text" placeholder="Your email" autoFocus required/>
                            </div>

                            <div className="form-group row">
                                <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Password:</b></h6>
                                <input className="form-control col-lg-9 col-xl-10" type="password" placeholder="Your password" required minlength="6"/>
                            </div>

                            <div className="d-flex align-items-center row col-11" style={{margin: '0px auto'}}>
                                <input className="d-flex" type="checkbox" style={{marginRight: '5px'}}/>
                                <label className="d-flex" style={{margin: '0px',fontSize: '12px'}}>Remember me</label>
                                <Link style={{marginLeft: 'auto',fontSize: '12px'}}>Forgot password?</Link>
                            </div>

                            <Link to="/">
                                <button className="btn btn-primary border-0 rounded-pill mt-4 mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}} onClick={this.props.click}>
                                    <b>Register</b>
                                </button>
                            </Link>

                        </form>

                        
                    </div>
                </div>
            </div>
        )
    }
}