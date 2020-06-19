import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../asserts/img/library-logo.png';
import logoSmall from '../../asserts/img/library-logo-sm.png';

const jumbotronStyles = {
    height:             '75px',
    margin:             'auto',
    backgroundColor:    '#fff',
    borderBottom:       '3px solid #1429D7',
    padding:            'auto'
}

export class Header extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <header>
                <div className="jumbotron d-flex align-items-center" style={jumbotronStyles}>
                    <a href="/" style={{margin: '0px 10px'}}>
                        <img className="img-fluid ml-auto d-none d-md-inline-block" data-toggle="tooltip" data-bs-tooltip="" data-placement="bottom" src={logo} title="University of Science FIT Library"/>
                        <img className="ml-auto img-fluid d-inline-block d-md-none" data-toggle="tooltip" data-bs-tooltip="" data-placement="bottom" src={logoSmall} title="University of Science FIT Library"style={{width: '75px',height: '75px'}}/>
                    </a>

                    <form id="searchBar" className="d-lg-flex col-8 col-lg-7 border rounded-pill" style={{margin: '0px auto',height: '66px',display: 'none'}}>
                        <div id="searchInput" className="form-group my-auto d-lg-inline-block col-8 border-right" style={{padding: '0px'}}>
                            <input className="border-0 rounded-0 form-control" type="search" placeholder="Seach..." required="" style={{height: '50px',width: 'fit',padding: '0px 12px'}}/>
                        </div>

                        <div id="searchMaterial" className="form-group my-auto d-lg-inline-block col-4" style={{height: '38px',display: 'none'}}>
                            <div className="row">
                                <div className="dropdown col-6" style={{height: '38px',margin: '0px auto',padding: '0px 7px'}}>
                                    <button id="searchContent" className="btn btn-primary dropdown-toggle border-0 rounded-0" data-toggle="dropdown" aria-expanded="false" type="button" style={{backgroundColor: 'rgba(0,123,255,0)',color: '#000',height: 'auto'}}>
                                        Books&nbsp;
                                    </button>
                                    <div className="dropdown-menu" role="menu">
                                        <option className="dropdown-item" role="presentation">Books</option>
                                    </div>
                                </div>

                                <Link to="/search" className="col-6" style={{padding: '0px'}}>
                                    <button className="btn btn-primary border-0 rounded-pill col-12" type="submit" style={{backgroundColor: '#F15922',height: '40px',margin: '0px auto'}} formAction="#">
                                        <b>Search</b>
                                    </button>
                                </Link>
                                
                            </div>
                        </div>
                    </form>

                    <i id="searchHidden" className="fa fa-search d-flex float-right justify-content-center align-items-center ml-auto d-inline-block d-lg-none" style={{width: 'auto',height: '25px',color: '#1429D7',margin: '0px auto',marginRight: '10px'}}></i>
                    
                    <Link to="/sign-up">
                        <button id="signUpButton" className="btn btn-lg text-break text-center float-right rounded-pill" type="button" style={{color: '#1429D7',filter: 'hue-rotate(0deg)',border: '2px solid #1429D7',fontSize: '15px'}}>
                            <b>Sign Up</b>
                        </button>
                    </Link>
                    
                </div>
            </header>
        );
    }
}