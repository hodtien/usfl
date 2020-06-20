import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export class SignUp extends Component {
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
                                    <Link to="/sign-in" className="nav-link" style={{color: 'black'}}><h4>Sign in</h4></Link>
                                </li>
                                <li className="col nav-item">
                                    <Link to="/sign-up" className="nav-link active" style={{color: '#1429D7'}}><h4>Sign up</h4></Link>
                                </li>
                            </ul>

                            <form className="col-10 col-lg-8 mt-4" style={{margin: '15px auto 0px',padding: '15px 0px'}}>
                                <div className="form-group row">
                                    <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Full name:</b></h6>
                                    <input className="form-control col-lg-9 col-xl-10" type="text" placeholder="Your fullname (e.g. Nguyễn Văn A)" autoFocus required/>
                                </div>

                                <div className="form-group row">
                                    <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Phone:</b></h6>
                                    <input className="form-control col-lg-9 col-xl-10" type="text" placeholder="Your telephone number" required minlength="10"/>
                                </div>

                                <div className="form-group row">
                                    <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Email:</b></h6>
                                    <input className="form-control col-lg-9 col-xl-10" type="text" placeholder="Your email" required/>
                                </div>

                                <div className="form-group row">
                                    <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Password:</b></h6>
                                    <input className="form-control col-lg-9 col-xl-10" type="password" placeholder="Your password" required minlength="6"/>
                                </div>

                                <div className="form-group row">
                                    <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Confirm Password:</b></h6>
                                    <input className="form-control col-lg-9 col-xl-10" type="password" placeholder="Confirm your password" required minlength="6"/>
                                </div>

                                <div className="form-group row">
                                    <h6 className="col-lg-3 col-xl-2 text-left mt-1"><b>Gender:</b></h6>
                                    <div className="d-flex col-lg-9 col-xl-10" style={{margin: '0px auto'}}>
                                        <div className="form-check" style={{margin: '0px auto'}}>    
                                            <input className="form-check-input" type="radio" name="checkRadio" id="formCheck-1" checked/>
                                            <label className="form-check-label" for="formCheck-1">Male</label>
                                        </div>
                                        <div className="form-check" style={{margin: '0px auto'}}>    
                                            <input className="form-check-input" type="radio" name="checkRadio" id="formCheck-2" />
                                            <label className="form-check-label" for="formCheck-2">Female</label>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3 mb-3 text-left mt-2">
                                        <label style={{fontWeight: 'bold'}}>DOB:</label>
                                    </div>

                                    <div className="col-lg-3 mb-3">
                                        <select className="form-control" name="day" id="day" onchange="setDays(month,this,year)">
                                            <option value="" disabled selected hidden>Day</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-3 mb-3">
                                        <select className="form-control" name="month" id="month" onchange="setDays(this,day,year)">
                                            <option value="" disabled selected hidden>Month</option>
                                            <option value="01">January</option>
                                            <option value="02">February</option>
                                            <option value="03">March</option>
                                            <option value="04">April</option>
                                            <option value="05">May</option>
                                            <option value="06">June</option>
                                            <option value="07">July</option>
                                            <option value="08">August</option>
                                            <option value="09">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-3 mb-3">
                                        <select className="form-control" name="year" id="year" onchange="setDays(month,day,this)">
                                            <option value="" disabled selected hidden>Year</option>
                                            <option value="1944">1944</option>
                                            <option value="1945">1945</option>
                                            <option value="1946">1946</option>
                                            <option value="1947">1947</option>
                                            <option value="1948">1948</option>
                                            <option value="1949">1949</option>
                                            <option value="1950">1950</option>
                                            <option value="1951">1951</option>
                                            <option value="1952">1952</option>
                                            <option value="1953">1953</option>
                                            <option value="1954">1954</option>
                                            <option value="1955">1955</option>
                                            <option value="1956">1956</option>
                                            <option value="1957">1957</option>
                                            <option value="1958">1958</option>
                                            <option value="1959">1959</option>
                                            <option value="1960">1960</option>
                                            <option value="1961">1961</option>
                                            <option value="1962">1962</option>
                                            <option value="1963">1963</option>
                                            <option value="1964">1964</option>
                                            <option value="1965">1965</option>
                                            <option value="1966">1966</option>
                                            <option value="1967">1967</option>
                                            <option value="1968">1968</option>
                                            <option value="1969">1969</option>
                                            <option value="1970">1970</option>
                                            <option value="1971">1971</option>
                                            <option value="1972">1972</option>
                                            <option value="1973">1973</option>
                                            <option value="1974">1974</option>
                                            <option value="1975">1975</option>
                                            <option value="1976">1976</option>
                                            <option value="1977">1977</option>
                                            <option value="1978">1978</option>
                                            <option value="1979">1979</option>
                                            <option value="1980">1980</option>
                                            <option value="1981">1981</option>
                                            <option value="1982">1982</option>
                                            <option value="1983">1983</option>
                                            <option value="1984">1984</option>
                                            <option value="1985">1985</option>
                                            <option value="1986">1986</option>
                                            <option value="1987">1987</option>
                                            <option value="1988">1988</option>
                                            <option value="1989">1989</option>
                                            <option value="1990">1990</option>
                                        </select>
                                    </div>
                                </div>
                            </form>

                            <div className="form-check col-11" style={{margin: '0px auto'}}>
                                <input className="form-check-input" type="checkbox" id="formCheck-2" required/>
                                <label className="form-check-label" for="formCheck-2">I have read &amp; agreed with&nbsp;<a href="#">Term and Privacy</a></label>
                            </div>
                        </div>

                        <Link to="/">
                            <button className="btn btn-primary border-0 rounded-pill mt-4 mb-4" type="submit" style={{backgroundColor: '#F15922',height:'40px',width: '150px',margin: '0px auto'}} onClick={this.props.click}>
                                <b>Submit</b>
                            </button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        )
    }
}