import React, { Component } from "react";
import axios from "axios";


import Jumbotron from 'react-bootstrap/Jumbotron';
import Table from 'react-bootstrap/Table';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      users: [], 
      searchTerm: '', 
      alphabetical: 'az'
     };

    this.handleChange = this.handleChange.bind(this);
  }
data
  componentDidMount() {
    var radioGender = "male";
      var selectedNationality = "AU"

      var url = "https://randomuser.me/api/?results=10";
      
    
    axios
      .get(url)
      .then(response => {
        console.log(response.data.results);
        this.setState({
           users: response.data.results });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value


    });
  }

  render() {
    let sortedUsers;

    if (this.state.alphabetical === "az") {
      console.log("sort");
      sortedUsers = this.state.users.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
    } else {
      sortedUsers = this.state.users.sort((a, b) =>
        a.name.first < b.name.first ? 1 : -1
      );
    }

    let filteredUsers = sortedUsers;

    if (this.state.searchTerm)
      filteredUsers = this.state.users.filter(u =>
        u.name.first.startsWith(this.state.searchTerm)
      );

    const userNames = filteredUsers.map(u => {
      return <User key={u.email} name={u.name.first} last={u.name.last} age={u.dob.age} email={u.email} photo={u.picture.medium} />;
      
    }
   
    );
    return (

      <div className="container">
      <Jumbotron fluid>
      
          <h1>Company Directory</h1>
          <p>
            Render information about of employ 
          </p>
    
      </Jumbotron>
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search for user:
            <input
              type="text"
              name="searchTerm"
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <select
          name="alphabetical"
          value={this.state.alphabetical}
          onChange={this.handleChange}
        >
          <option selected value="az">
            A to Z
          </option>
          <option value="za">Z to A</option>
        </select>

        {userNames}
        </div>

        
      </div>
    );
  }
}

class User extends Component {
  render() {
    return (
      

      <div>
          <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th> Picture</th>
          </tr>
        </thead>

        <tr>
            <td>{this.props.name}</td>
            <td>{this.props.last}</td>
            <td>{this.props.age}</td>
            <td><a href="https://randomuser.me/api/?results=10">{this.props.email}</a></td>
            <td><img src={this.props.photo} alt = {this.props.name}/></td>
            
            </tr>
            </Table>
      </div>
    );
  }
}

export default App;