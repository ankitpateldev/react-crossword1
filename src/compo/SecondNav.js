// import { Container, Nav, Navbar } from 'react-bootstrap';
// import React, { useState } from 'react';

// function BasicExample() {
//   const [expanded, setExpanded] = useState(false);

//   const handleToggle = () => setExpanded(!expanded);

//   return (
//     <Navbar bg="warning" expand="md" expanded={expanded}>
//       <Container>
//         <Navbar.Toggle
//           aria-controls="basic-navbar-nav"
//           onClick={handleToggle}
//         />
//         <Navbar.Collapse
//           id="basic-navbar-nav"
//           className="justify-content-between"
//         >
//           <Nav
//             style={{
//               display: 'flex',
//               justifyContent: 'flex-end',
//               alignItems: 'center',
//             }}
//             className="ml-auto justify-content-center"
//             onClick={() => setExpanded(false)}
//             activeKey=""
//           >
//             <Nav.Link href="#home">Books |</Nav.Link>
//             <Nav.Link href="#features">Toys |</Nav.Link>
//             <Nav.Link href="#pricing">Stationery |</Nav.Link>
//             <Nav.Link href="#about">Gifts & Accessories |</Nav.Link>
//             <Nav.Link href="#contact">Magazines |</Nav.Link>
//             <Nav.Link href="#contact">The Write Place</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default BasicExample;

import { Container, Nav, Navbar } from 'react-bootstrap';
import React, { useState } from 'react';

function BasicExample() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);

  return (
    <Navbar bg="warning" expand="md" expanded={expanded}>
      <Container>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ml-auto justify-content-center"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              
            }}
            onClick={() => setExpanded(false)}
            activeKey=""
          >
            <Nav.Link href="#home">Books</Nav.Link>
            <Nav.Link href="#features">Toys</Nav.Link>
            <Nav.Link href="#pricing">Stationery</Nav.Link>
            <Nav.Link href="#about">Gifts & Accessories</Nav.Link>
            <Nav.Link href="#contact">Magazines</Nav.Link>
            <Nav.Link href="#contact">The Write Place</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <style>
      {`
          .navbar-light .navbar-nav .nav-link:hover {
            color: #fff;
            background-color: #212529;
            border-radius: 5px;
          }
           .navbar-light .navbar-nav .nav-link {
            color: #212529;
           
          }
          
          .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link.active {
            color: #fff;
            background-color: #212529;
          }
          
          .navbar-light .navbar-nav .nav-link:hover:focus, .navbar-light .navbar-nav .nav-link.active:hover {
            color: #fff;
            background-color: #212529;
          }
        `}
        
      </style>
    </Navbar>
  );
}

export default BasicExample;
