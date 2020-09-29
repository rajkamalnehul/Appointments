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
      formDisplay:false,
      lastIndex: 0,
      orderBy:'petName',
      orderDirection:'asc'
      
    }; 
    this.addAppointments = this.addAppointments.bind(this);
  }

  changeOrder=(order,direction)=>{
    this.setState({orderBy:order})
    this.setState({orderDirection:direction})
    }

   addAppointments(apts){
    let tempApts=this.state.myAppointments;
    apts.aptId =this.state.lastIndex;
    tempApts.unshift(apts);
    
   
    

    this.setState({myAppointments:tempApts,
    lastIndex:this.state.lastIndex + 1});
    
    
    }

  deleteappointments=(apt)=>{
    let tempApts = this.state.myAppointments;
    tempApts = without(tempApts,apt);
    this.setState({myAppointments:tempApts})
  }

  toggleform=()=>{
   this.setState({formDisplay:!this.state.formDisplay})
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
    
      let order;
      let filteredApts = this.state.myAppointments;
       if (this.state.orderDirection === 'asc') {
       order = 1;
       } else {
       order = -1;
      }
   
      filteredApts.sort((a, b) => {
      if (
     a[this.state.orderBy].toLowerCase() <
       b[this.state.orderBy].toLowerCase()
       ) {
       return -1 * order;
       } else {
       return 1 * order;
       }
     });
    
  
    
    
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <SearchAppointments orderBy={this.state.orderBy} orderDirection={this.state.orderDirection} changeOrder={this.changeOrder} />
                <AddAppointments formdisplay={this.state.formDisplay} toggleForm={this.toggleform} addAppointments={this.addAppointments}/>
                <ListAppointments  appointments={this.state.myAppointments} deleteAppointments={this.deleteappointments }/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;