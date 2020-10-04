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
      orderDirection:'asc',
      searchField:' '
      
    }; 
    this.addAppointments = this.addAppointments.bind(this);
  }
 
  querry=(querryText)=>{
    this.setState({searchField:querryText});
  }
  

  changeOrder= (order,direction)=>{
    
    this.setState({orderBy:order});
    this.setState({orderDirection:direction});
  }
    
    
    

   addAppointments =(apts)=>{
    let tempApts=this.state.myAppointments;
    apts.aptId =this.state.lastIndex;
    tempApts.unshift(apts);
    
   
    

    this.setState({myAppointments:tempApts,
    lastIndex:this.state.lastIndex + 1});
    this.setState({searchField:'a'});
    
    
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
   
      filteredApts=filteredApts.sort((a, b) => {
      if (
       a[this.state.orderBy].toLowerCase() <
       b[this.state.orderBy].toLowerCase()
       ) {
       return -1 * order;
       } else {
       return 1 * order;
       }
     }).filter(eachItem => {
        return(
       eachItem['petName']
       .toLowerCase()
       .includes(this.state.searchField.toLowerCase()) ||
       eachItem['ownerName']
       .toLowerCase()
       .includes(this.state.searchField.toLowerCase()) ||
       eachItem['aptNotes']
       .toLowerCase()
       .includes(this.state.searchField.toLowerCase()) 

        )
     });

     
     
return (
  <main className='page' id="petratings">
    <div className="container col-sm-12">
      <SearchAppointments  orderBy={this.state.orderBy} orderDirection={this.state.orderDirection} changeOrder={this.changeOrder}  handleChange={this.querry} />
      <AddAppointments formdisplay={this.state.formDisplay} toggleForm={this.toggleform} addAppointments={this.addAppointments}/>
      <ListAppointments  appointments={filteredApts}  deleteAppointments={this.deleteappointments }/>
     </div>
  </main>
    );
  }
}

export default App;