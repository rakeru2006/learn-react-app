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
    fetch("https://randomuser.me/api/?results=50")
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

      return(

    

        <div className="container">
        <Jumbotron fluid>
        
            <h1>Company Directory</h1>
            <p>
              Render images of employ 
            </p>
       
        </Jumbotron>

        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td> item.name.first</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>



        {items.map(item => (
        
         
        <img src={item.picture.medium } alt = {item.name.first}/>


        
        ))}

        </div>
      ) 
      }
  }
}

export default App;

