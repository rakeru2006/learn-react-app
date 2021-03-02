import React, {Component} from 'react'
import { unstable_renderSubtreeIntoContainer } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import Jumbotron from 'react-bootstrap/Jumbotron';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      items:[],
      loading:false
    }
  }

  componentDidMount(){
    fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        items:response.results,
        loading:true,
      })
      
    })
  }

  render(){
      var {items,loading} = this.state


      if(!loading){
        return(
        <div>Loading....</div>

        )
      }
      else{

        console.log("resultado api:");
        console.log(this.state.items[1].name);
        //console.log(this.state.items);

      return(

        <div className="container">
        <Jumbotron fluid>
        
            <h1>Company Directory</h1>
            <p>
              Render information about of employ 
            </p>
       
        </Jumbotron>

        <Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Employ Picture</th>
    </tr>
  </thead>
  
  <tr>
      {items.map((item) => (
      <td>
      <p key={item.name.first}>{item.name.first}</p>
      </td>
      ))} 
  </tr>
  
  <tr>
      {items.map((item) => (
      <td>
      <p key={item.name.last}>{item.name.last}</p>
      </td>
      ))} 
  </tr>
  <tr>
    {items.map(item => (        
      <td>
    <img src={item.picture.medium } alt = {item.name.first}/>
    </td>
    ))}
    </tr>
    
  
</Table>





      

        </div>
      ) 
      }
  }
}

const Header = () => {
  return (
    <header>
      <h1 className="text-center">Employee Directory</h1>
      <p className="text-center">
        Click on column headers to filter by heading or use the search box to narrow
        your results.
      </p>
    </header>
  );
};


const SearchBar = (props) => {
  // Setting the component's initial state

  return (
    <nav className="navbar navbar-light bg-light justify-content-center">
      <form className="form-inline m-2" onSubmit={props.handleFormSubmit}>
        <input
          className="form-control"
          value={props.value}
          name="search"
          onChange={props.handleInputChange}
          type="search"
          placeholder="Search"
        />
      </form>
    </nav>
  );
};

const EmployeeTable = (props) => {
  return (
    <table className="table table-striped table-sortable text-center">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col" data-field="name" data-sortable="true">
            <span onClick={() => props.sortBy("name", "last", "first")}>
              Name
            </span>
          </th>
          <th scope="col">
            <span onClick={() => props.sortBy("phone")}>Phone</span>
          </th>
          <th scope="col">
            <span onClick={() => props.sortBy("email")}>Email</span>
          </th>
          <th scope="col">
            <span onClick={() => props.sortBy("dob", "date")}>DOB</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.state.filteredEmployees.map((employee) => {
          const { first, last } = employee.name;
          const fullName = `${first} ${last}`;

          // Format date
          const dob = props.formatDate(employee.dob.date);

          return (
            <tr key={employee.login.uuid}>
              <td>
                <img src={employee.picture.thumbnail} alt={fullName} />
              </td>
              <td className="align-middle">{fullName}</td>
              <td className="align-middle">
              <a href={`tel:+1${employee.phone}`}>{employee.phone}</a></td>
              <td className="align-middle email">
                <a href={`mailto:${employee.email}`}>{employee.email}</a>
              </td>
              <td className="align-middle">{dob}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};




export default App;

