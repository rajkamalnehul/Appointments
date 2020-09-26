import React, {Component}from 'react';
import '../css/App.css';
import ListAppointments from './ListAppointments';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import {without} from 'lodash';
class App extends Component {
  constructor(){
    super();
    this.state ={
      myAppointments: [],
      lastIndex: 0
    };

    
  }
  deleteappointments=(apt)=>{
    let tempApts = this.state.myAppointments;
    tempApts = without(tempApts,apt);
    this.setState({myAppointments:tempApts})
  }

  componentDidMount(){
    fetch('./data.json')
    .then(response => response.json())
    .then(result =>{
      const apts = result.map(items => {
        items.aptId = this.state.lastIndex;
        this.setState({lastIndex: this.state.lastIndex+1})
        return items;
      });
      this.setState({
        myAppointments:apts,
       
      });
    });
  }


  render() {
    
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <SearchAppointments />
                <AddAppointments/>
                <ListAppointments appointments={this.state.myAppointments} deleteAppointments={this.deleteappointments }/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;