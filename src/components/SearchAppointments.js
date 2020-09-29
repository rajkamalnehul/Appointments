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
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className={'dropdown-item sort-by btn btn-outline-grey ' + (this.props.orderBy=== 'default' ? 'active': '')} onClick={e=>this.props.changeOrder('default','Default')} >Default</button>
                            <button className={'dropdown-item sort-by btn btn-outline-grey ' + (this.props.orderBy=== 'petName' ? 'active': '')} onClick={e=>this.props.changeOrder('petName',this.props.orderDirection)} >Pet Name</button>
                            <button className={'dropdown-item sort-by btn btn-outline-grey '  + (this.props.orderBy=== 'ownerName' ? 'active': '')} onClick={e=>this.props.changeOrder('ownerName',this.props.orderDirection)}>Owner Name</button>
                            <div role="separator" className="dropdown-divider"></div>
                            <button className={'dropdown-item btn sort-by btn-outline-grey '  + (this.props.orderDirection=== 'asc' ? 'active': '')} onClick={e=>this.props.changeOrder(this.props.orderBy,'asc')}>Ascending</button>
                            <button className={'dropdown-item btn sort-by btn-outline-grey '  + (this.props.orderDirection=== 'dec' ? 'active': '')} onClick={e=>this.props.changeOrder(this.props.orderBy,'dec')}>Descending</button>
                           
                        </div>
                    </div>
                </nav>
                
            </div>
        )
    }}

export default SearchAppointments;


