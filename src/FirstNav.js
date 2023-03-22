import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import  {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCartShopping);

function Firstnav() {
  return (
    <div>
      <Navbar bg="black" variant="dark" expand="lg">
        <Navbar.Brand >
          <img src="https://i.imgur.com/6jZgj9W.png" alt="Image" class="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto flex-wrap d-flex align-items-center">
        <div className="d-flex align-items-center" style={{ display: 'inline-flex' }}>
  <input
    type="search"
    className="form-control me-2"
    placeholder="Search"
    style={{ height: '35px' }}
  />
  <Button variant="warning" style={{ height: '35px' }}>
    <img src={'https://i.imgur.com/mOCHosU.png'} style={{ width: '20px',marginTop: '-7px' }} alt="search-icon" />
  </Button>
 </div> <br/>
 </Nav>

         <Router>
          <Nav className="ms-auto">
            <Nav
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Link
                style={{
                  color: '#FAF600',
               
                  marginRight: '10px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
                href="#home"
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = '#FAF600')}
              >
                Home
              </Link>
              <Link
               to="/Blog"
                style={{
                  color: '#FAF600',
                  marginRight: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
        
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = '#FAF600')}
              >
               Blog
              </Link>
              <Link
                style={{
                  color: '#FAF600',
                  marginRight: '10px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
                href="#pricing"
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = '#FAF600')}
              >
                My Account
              </Link>
              <Link
                style={{
                  color: '#FAF600',
                  marginRight: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
                href="#home"
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = '#FAF600')}
              >
                Gift Card Balance
              </Link>
              <Link
                style={{
                  color: '#FAF600',
                  marginRight: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
                href="#home"
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = '#FAF600')}
              >
                Track Your Order
              </Link>
              <Link
                style={{
                  color: '#FAF600',
                  marginRight: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
                href="#home"
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = '#FAF600')}
              >
                My Wishlist
              </Link>
              <Link
                style={{
                  color: '#FAF600',
                  marginRight: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                }}
                href="#home"
                onMouseEnter={(e) => (e.target.style.color = '#fff')}
                onMouseLeave={(e) => (e.target.style.color = '#FAF600')}
              >
                Customer Care
              </Link>
              <Link>
              <Button
              
              className="form-control me-2"
              variant="warning"
            
              style={{ height: '35px',alignSelf: 'center' ,marginLeft:'10px'}}
            >    
            <span style={{ fontWeight: 'bold', color: 'blue', marginTop: '-7px' }}>     <FontAwesomeIcon
                          icon="cart-shopping"
                          style={{ marginRight: '3px' }}
                          flip/> My Cart</span>
              <img
                src={'https://i.imgur.com/ZJX7uMO.png'}
                style={{ width: '20px',verticalAlign: 'middle', marginTop: '-7px',marginLeft:'7px' }}
              />

            </Button>
                </Link>
              
            </Nav>
          </Nav>
          </Router>
        </Navbar.Collapse>
       
      </Navbar>
      
    </div>
  );
}

export default Firstnav;
