import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {  Row, FormGroup, FormControl, ControlLabel, Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  constructor(props) {
     super(props)

     this.state = {
         formData: {}, // Contains login form data
         shown: false,
     }
 }

 handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let { formData } = this.state;
    formData[name] = value;

    this.setState({
        formData: formData
    });
}
login = (e) => {
     e.preventDefault();
     console.log(this.state.formData);
     if(this.state.formData.username == undefined || this.state.formData.password == undefined ){
       console.log(this.state.shown)
     } else {
     localStorage.setItem('username',this.state.formData.username);
     localStorage.setItem('password',this.state.formData.password);
     localStorage.setItem('logout', 1);
     let path = `/search`;
    this.props.history.push(path);
  }
 }
  render() {
    var shown = {
     display: this.state.shown ? "block" : "none"
  };
    return (
      <div>
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            Searchpedia
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
      <div className="Login">
       <Row>
           <form>
               <FormGroup>
                   <ControlLabel>Username</ControlLabel>
                   <FormControl type="text" name="username"  placeholder="Enter your username" onChange={this.handleInputChange} required/>
               </FormGroup>
               <FormGroup>
                   <ControlLabel>Password</ControlLabel>
                   <FormControl type="password" name="password"  placeholder="Enter your password" onChange={this.handleInputChange} required/>
               </FormGroup>
               <Button type="submit" bsStyle="primary" onClick={this.login}>Sign-In</Button>
               <span className="alert" style={ shown }>Please fill details!!</span>
           </form>
       </Row>
       </div>
   </div>
    )
  }
}
