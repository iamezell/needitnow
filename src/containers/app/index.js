import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import { Button, Jumbotron, Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
const jumbotronInstance = (
    <Jumbotron>
        <h1>Become an owner!</h1>
        <p>We use the internet and it's technologies to bring wealth to everyone starting from this very site.</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
    </Jumbotron>
);

const navbarInstance = (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">thebigNEED</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem eventKey={1} href="#">About</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
        </Nav>
    </Navbar>
);

const App = () => {
    return (
        <div>
            {navbarInstance}
            {jumbotronInstance}
            <main>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </main>
        </div>
)
}
export default App
