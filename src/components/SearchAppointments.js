import React,{Component} from 'react';
import '../css/SearchAppointment.css';

class SearchAppointments extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top justify-content-between">
                    <h1 className="navbar-brand mx-auto font-weight-bold">Pet Empire Medecine</h1>
                    <form className="form-inline">
                        <input className="form-control search-outline-light mr-sm-2 mx-auto" type="search" placeholder="Search" aria-label="Search"/>
                    </form> 
                    <div className="dropdown">
                        <button className="btn btn-outline-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort</button>
                        <div className="dropdown-menu">
                            <button className="dropdown-item btn btn-outline-light" >Action</button>
                            <button className="dropdown-item btn btn-outline-light" >Another action</button>
                            <button className="dropdown-item btn btn-outline-light" >Something else here</button>
                           
                        </div>
                    </div>
                </nav>
                
            </div>
        )
    }}

export default SearchAppointments;


