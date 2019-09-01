import React, { Component } from 'react'
import { Button,Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Search.css';
import words from './words';
import ReactWordcloud from 'react-wordcloud';
import {Resizable} from 're-resizable';

const resizeStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
};

export default class Result extends Component {
  constructor(props) {
     super(props)
     // this.state = {
     //     formData: {}, // Contains login form data
     //     shown: false,
     // }
     console.log(words)
     let a = JSON.parse(localStorage.getItem("me"))
     console.log(a);
     for(var i =0; i<a.length;i++) {
       words[i].text = a[i].title;
     }
 }
 logout = () => {
   localStorage.setItem('me',undefined );
 }
 search = () => {
   localStorage.setItem('me', undefined);
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
         <NavItem eventKey={2} componentClass={Link} href="/" to="/search" onClick={this.search}>
           Search
         </NavItem>
         <NavItem eventKey={1} componentClass={Link} href="/" to="/" onClick={this.logout}>
           Logout
         </NavItem>
       </Nav>
       </Navbar.Collapse>
     </Navbar>
     <div style={this.divStyle}>
     <Resizable
       defaultSize={{
         width: 600,
         height: 300
       }}
       style={resizeStyle}>
       <div style={{width: '100%', height: '100%'}}>
        <ReactWordcloud words={words} />
       </div>
     </Resizable>
     </div>
    </div>
  );
  }
}
