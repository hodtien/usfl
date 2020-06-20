import React, {Component} from 'react'
import {BookContainer} from '../booksContainerComponent/booksContainer'
import {UserComment} from '../commentComponent/comment'
import BookImage from '../../asserts/js/images'
import {Link} from 'react-router-dom'

export class BookDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const signIn = this.props.signIn
        return (
            <div>
                <div className="container-fluid shadow" style={{borderBottom: '3px solid #1429D7'}}>
                    <div className="container mt-3">
                        <div className="row" style={{padding: '10px 20px'}}>
                            <div className="col-md-4" style={{padding: '10px 20px'}}>
                                <img className="col-md-12 mb-2" src={BookImage[parseInt(this.props.serial)]}/>
                                <div className="col-md-12 row" style={{margin: 0, padding: '0px 30px'}}>
                                    <div className="col border" style={{margin: '0px 10px', padding: 0}}>
                                        <img src={BookImage[parseInt(this.props.serial)]} style={{width: '100%'}}/>
                                    </div>

                                    <div className="col border" style={{margin: '0px 10px', padding: 0}}>
                                        <img src={BookImage[parseInt(this.props.serial)]} style={{width: '100%'}}/>
                                    </div>

                                    <div className="col border" style={{margin: '0px 10px', padding: 0}}>
                                        <img src={BookImage[parseInt(this.props.serial)]} style={{width: '100%'}}/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-8" style={{padding: '10px 20px', margin: 'auto 0px'}}>
                                <h3 className="col-12"><b>{this.props.title}</b></h3>
                                <div className="row">
                                    <label className="col-9 text-left" style={{padding: 0}}>SKU: {this.props.sku}</label>
                                    <label className="col-3 text-right" style={{padding: 0}}>({this.props.view} views)</label>
                                </div>
                                <div className="col-12 col-md-4 col-lg-3 col-xl-2" style={{backgroundColor: '#F15922', color: 'white', height: '30px'}}>
                                    <span className="border-0 rounded-0 align-middle"><b>{this.props.status}</b></span>
                                </div>

                                <div className="row" style={{marginTop: '50px'}}>
                                    <label className="col-3 mb-0 text-left" style={{padding: 0}}>Author: </label>
                                    <span className="col-9 mb-0 text-left"><b>{this.props.author}</b></span>
                                </div>

                                <div className="row mt-2">
                                    <label className="col-3 mb-0 text-left" style={{padding: 0}}>Publisher: </label>
                                    <span className="col-9 mb-0 text-left"><b>{this.props.publisher}</b></span>
                                </div>

                                <div className="row mt-2">
                                    <label className="col-3 mb-0 text-left" style={{padding: 0}}>Pages: </label>
                                    <span className="col-9 mb-0 text-left"><b>{this.props.page}</b></span>
                                </div>

                                <div className="row mt-2">
                                    <label className="col-3 mb-0 text-left" style={{padding: 0}}>Language: </label>
                                    <span className="col-9 mb-0 text-left"><b>{this.props.language}</b></span>
                                </div>
                                
                                <div className="row mt-2">
                                    <label className="col-3 mb-0 text-left" style={{padding: 0}}>Type: </label>
                                    <span className="col-9 mb-0 text-left"><b>{this.props.type}</b></span>
                                </div>

                                <div className="col-sm-12 row" style={{padding: 0, marginTop: '30px'}}>
                                    <div className="col-sm-4 col-lg-3 text-left mt-3" style={{color: '#1429D7', padding: 0}}>Availability: &nbsp;<b>{this.props.availability}</b></div>
                                    <button className="col-5 col-sm-3 col-lg-4 btn btn-primary border-0 rounded-pill mt-2" type='button' style={{color: 'white',backgroundColor: '#1429D7',height: '40px',margin: '0px auto'}}><b>Place hold</b></button>
                                    <button className="col-5 col-sm-3 col-lg-4 btn btn-primary border-0 rounded-pill mt-2" type='button' style={{color: 'white',backgroundColor: '#1429D7',height: '40px',margin: '0px auto'}}><b>Borrow</b></button>
                                </div>

                                <div className="col-12 row" style={{padding: 0, marginTop: '50px', marginRight: 0}}>
                                    <span className="col-3 text-left mt-2" style={{padding: 0}}>Tag:</span>
                                    <div className="col-9 row">
                                        <Link to='/search'>
                                            <button className="btn btn-primary border-0 rounded-0 mt-2" style={{margin: '0px 15px',backgroundColor: '#F15922'}}>
                                                <b>{this.props.tag[0]}</b>
                                            </button>
                                        </Link>
                                        
                                        <Link to='/search'>
                                            <button className="btn btn-primary border-0 rounded-0 mt-2" style={{margin: '0px 15px',backgroundColor: '#F15922'}}>
                                                <b>{this.props.tag[1]}</b>
                                            </button>
                                        </Link>
                                        
                                        <Link to='/search'>
                                            <button className="btn btn-primary border-0 rounded-0 mt-2" style={{margin: '0px 15px',backgroundColor: '#F15922'}}>
                                                <b>{this.props.tag[2]}</b>
                                            </button>
                                        </Link>
                                        
                                    </div>
                                </div>

                                <div className="col-12 row" style={{padding: 0, marginTop: '10px', marginRight: 0}}>
                                    <span className="col-3 text-left mt-2" style={{padding: 0}}>Rate:</span>
                                    <div className="col-9 row mt-3 ml-0">
                                        <i className="fa fa-star checked float-left" style={{color: '#1429D7'}}></i>
                                        <i className="fa fa-star checked float-left" style={{color: '#1429D7'}}></i>
                                        <i className="fa fa-star checked float-left" style={{color: '#1429D7'}}></i>
                                        <i className="fa fa-star checked float-left" style={{color: '#1429D7'}}></i>
                                        <i className="fa fa-star float-left" style={{color: '#1429D7'}}></i>
                                        <span className="ml-5 float-right">({this.props.rates} ratings)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid" style={{backgroundColor: '#c2c2c2'}}>
                    <div className="container">
                        <div className="text-left">
                            Introduction
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="container mt-3">
                        <div className="text-left">
                            <h5><b>{this.props.title}</b></h5>
                        </div>

                        <div className="text-justify">
                            {this.props.content}
                        </div>

                        <button className="btn btn-primary border-0 rounded-pill mt-2 mb-2" style={{backgroundColor: '#F15922',height: '40px',width: '150px',margin: '0px auto'}}>
                            <b>...See More</b>
                        </button>
                    </div>
                </div>

                <BookContainer lineStyle='2' title='Same category' tag='none'/>
                <BookContainer lineStyle='3' title='Recommend for you' tag='none'/>

                <div className="container-fluid" style={{backgroundColor: '#c2c2c2'}}>
                    <div className="container">
                        <div className="text-left">
                            Comments 12
                        </div>
                    </div>
                </div>

                <UserComment name='hdtien' title='Content' commentText='Sách hay, dễ hiểu, dễ đọc'/>
                <UserComment name='ntmthuy' title='Content' commentText='Sách hay, dễ hiểu, dễ đọc'/>
                <UserComment name='nqtoan' title='Content' commentText='Sách hay, dễ hiểu, dễ đọc'/>

                <button className="btn btn-primary border-0 rounded-pill mb-4" style={{backgroundColor: '#F15922',height: '40px',width: '150px',margin: '0px auto'}}>
                    <b>...See More</b>
                </button>
                {signIn?
                <div>
                    <div className="container-fluid" style={{backgroundColor: '#c2c2c2'}}>
                        <div className="container">
                            <div className="text-left">
                                Your comment
                            </div>
                        </div>
                    </div>

                    <div className="container" style={{padding: '10px 60px', backgroundColor: 'white'}}>
                        <div className="row mt-3 mb-4">
                            <div className="col-6 col-md-2" style={{padding: '0px', margin: '0px auto',borderTop: '2px solid #1429D7'}}>
                                <div>
                                    <i className="fa fa-user-circle-o mt-4" style={{color: '#1429D7', fontSize: '60px'}}></i>
                                </div>
                                <p className="text-center mt-2" style={{color: '#1429D7'}}><b>nqtoan</b></p>
                            </div>

                            <div className="col-12 col-md-9">
                                <div className="col-sm-12 row mt-3">
                                    <label className="col-2 col-md-2 text-right">Rate:</label>
                                    <div className="col-4 col-xl-2 mt-1 ml-4">
                                        <i className="fa fa-star checked float-left"></i>
                                        <i className="fa fa-star checked float-left"></i>
                                        <i className="fa fa-star checked float-left"></i>
                                        <i className="fa fa-star checked float-left"></i>
                                        <i className="fa fa-star float-left"></i>
                                    </div>
                                </div>

                                <div className="form-group d-block d-xl-flex col-12" style={{margin: '15px auto'}}>
                                    <input className="form-control" type="text" placeholder="Title (optional)" minLength="7"/>
                                </div>

                                <div className="form-group d-block col-12" style={{margin: '15px auto'}}>
                                    <textarea className="form-control" placeholder="*Message" required="" style={{height: '200px'}}/>
                                </div>

                                <button className="btn btn-primary border-0 rounded-pill col-6 col-md-4" type="submit" style={{backgroundColor: '#F15922',height: '40px',margin: '0px auto'}} formAction="#">
                                    <b>Submit</b>
                                </button>
                            </div>

                            
                        </div>
                    </div>
                </div> : <div></div>}
                
                
            </div>
        )
    }
}