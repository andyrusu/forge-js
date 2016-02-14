var React       = require('react');
var Navbar      = require('react-bootstrap').Navbar;
var Nav         = require('react-bootstrap').Nav;
var NavItem     = require('react-bootstrap').NavItem;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem    = require('react-bootstrap').MenuItem;

var MainHeader = React.createClass({
  render: function () {
    return (
      <Navbar inverse fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Forge</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>Generate</NavItem>
          <NavItem>Simulate</NavItem>
          <NavItem>Run</NavItem>
        </Nav>
        <Nav pullRight>
          <NavDropdown title="User">
            <MenuItem>Profile</MenuItem>
            <MenuItem>Project Settings</MenuItem>
            <MenuItem>Forge Settings</MenuItem>
            <MenuItem>Exit</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = MainHeader;
