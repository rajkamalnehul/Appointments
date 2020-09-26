import React,{Component} from 'react';
import Moment from 'react-moment';

class ListAppointments extends Component {
    render(props){
        return(
                <div className="appointment-list item-list">
                    {this.props.appointments.map(item => (
                        <div className="card d-flex pet-item mt-3 shadow p-3 mb-5 bg-white rounded" key={item.aptId}>
                            <div className="card-body">
                                <h2 className="card-title pet-name ">{item.petName}</h2>
                                <span className="apt-date ml-auto"><Moment
                                date={item.aptDate}
                                parse="YYYY-MM-D hh:mm"
                                format ="MMM-D  h:mma"/>
                                </span>
                                <div className="owner-name">
                                    <span className="label-item">Owner: </span>
                                    <span>{item.ownerName}</span>
                                </div>
                                <p className="card-text ">{item.aptNotes}</p>
                                <div>
                                    <button onClick={()=> this.props.deleteAppointments(item)} type="button" className="pet-delete btn btn-sm btn-danger" data-toggle="tooltip" data-placement="right" title="Cancel Appointment">Cancel</button>
                                </div>
                            </div>
                            </div>
                    ))}
              </div>

            )}}
                

export default ListAppointments;


//<div className="pet-item col media py-3">
//<div className="mr-3">
    //<button className="pet-delete btn btn-sm btn-danger">X</button>
//</div>

//<div className="pet-info media-body">
  //  <div className="pet-head d-flex">
    //    <span className="pet-name">{item.petName}</span>
      //  <span className="apt-date ml-auto">{item.aptDate}</span>
    //</div>

    //<div className="owner-name">
      //  <span className="label-item">Owner: </span>
        //<span>{item.ownerName}</span>
    //</div>
    //<div className="apt-notes">{item.aptNotes}</div>
//</div>
//</div>

