import React, { Component } from 'react'
import { Button,Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Search.css';
var QueryList = require('./QueryList');
var Form = require('./Form');

export default class About extends Component {
  constructor(props) {
  super(props);
  this.state = {
    data : [],
  };
  this.normalizeData = (rawData) => {
    return rawData[1].map(function(title, index) {
      return {
        title: title,
        paragraph: rawData[2][index],
        link: rawData[3][index]
      }
    })
  }
  this.addNewResult = (queryResult) => {
    if(queryResult === null) {
      this.setState({data: []})
      return;
    }
    const searchResult = this.normalizeData(queryResult)
    this.setState({ data: searchResult });
  }
};
logout = () => {
  localStorage.setItem('username',undefined );
  localStorage.setItem('password',undefined );
}
  render() {
    return (
    <div>
    <Navbar default collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          Searchpedia
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} componentClass={Link} href="/" to="/" onClick={this.logout}>
          Logout
        </NavItem>
      </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className='container'>
    <h1>Search with me</h1>
    <p>Wikipedia Search Engine</p>
    <Form onInput={this.addNewResult}/>
    <QueryList query={this.state.data} />
    </div>
  </div>
    )
  }
}
