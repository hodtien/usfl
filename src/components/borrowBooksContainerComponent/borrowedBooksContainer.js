import React, {Component} from 'react'
import {BorrowedBook} from '../borrowedBookComponent/borrowedBook'

export class BorrowedBooksContainer extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="container" style={{margin: '50px auto'}}>
                    <h1 className="text-center col-12" style={{color: '#1429D7'}}><b>My Books</b></h1>
                    <div className="row" style={{padding: '20px 0px'}}>
                        <div className="col text-left mt-3"><label>Sort by: Time (default)</label></div>
                        <div className="col">
                            <div className="dropdown float-right" style={{height: '38px'}}>
                                <button id="searchContent" className="btn btn-primary dropdown-toggle border-0 rounded" data-toggle="dropdown" aria-expanded="false" type="button" style={{backgroundColor: '#1429D7',color: 'white',height: 'auto'}}>
                                    Filter&nbsp;
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" role="menu">
                                    <option className="dropdown-item" role="presentation">Time (default)</option>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <BorrowedBook sku='12345678' stock='IN STOCK' status='Borrowing' date='20/6/2020' expire='14' />
                        <BorrowedBook sku='12345678' stock='IN STOCK' status='Returned' date='20/6/2020' returned='20/6/2020' />
                        <BorrowedBook sku='12345678' stock='IN STOCK' status='Returned' date='20/6/2020' returned='20/6/2020' />
                        <BorrowedBook sku='12345678' stock='IN STOCK' status='Returned' date='20/6/2020' returned='20/6/2020' />
                        <BorrowedBook sku='12345678' stock='IN STOCK' status='Returned' date='20/6/2020' returned='20/6/2020' />
                        
                    </div>                  
                </div>
            </div>
        )
    }
}