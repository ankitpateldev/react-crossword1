import React from "react";
import { Dropdown } from 'react-bootstrap';


function Crosswordfooter () {
  return (
    <div className = 'd-flex flex-row justify-content-evenly align'>
    <div className= "p-2">
<h5> shop with confidence </h5>
<Dropdown.Item eventKey="1">Secure Shopping </Dropdown.Item>
<Dropdown.Item eventKey="2">Privacy Policy </Dropdown.Item>
<Dropdown.Item eventKey="3"> Shipping Policy </Dropdown.Item>
<Dropdown.Item eventKey="4">Secure Shopping </Dropdown.Item>
<Dropdown.Item eventKey="5">Secure Shopping </Dropdown.Item>
      </div>
      <div className="p-2">
<h5> My Account </h5>
<Dropdown.Item eventKey="5">My Account  </Dropdown.Item>
<Dropdown.Item eventKey="5">My order </Dropdown.Item>
<Dropdown.Item eventKey="5">My Shopping cart </Dropdown.Item>
<Dropdown.Item eventKey="5">My Wishing list </Dropdown.Item>



        </div>
        <div className="p-2">
<h5> My Account </h5>
<Dropdown.Item eventKey="5">My Account  </Dropdown.Item>
<Dropdown.Item eventKey="5">My order </Dropdown.Item>
<Dropdown.Item eventKey="5">My Shopping cart </Dropdown.Item>
<Dropdown.Item eventKey="5">My Wishing list </Dropdown.Item>

      </div>
      </div>
  )
}
export default Crosswordfooter;