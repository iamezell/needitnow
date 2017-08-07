import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Platform from '../platform'
import { Button, Jumbotron, Nav, Navbar, NavItem } from 'react-bootstrap';
/*const jumbotronInstance = (
    <Jumbotron>
        <h1>You Now Have: $ dollars in your account.</h1>
        <p>Every active member of this site and any of its sister sites will get a percentage of the profits. Period. Become a part of history!</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
    </Jumbotron>
);*/

const navbarInstance = (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">thebigNEED</a>
            </Navbar.Brand>
        </Navbar.Header>
    </Navbar>
);

const App = () => {
    return (
        <div>
           
            <main>
                {navbarInstance}
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/platform" component={Platform} />
            </main>
        </div>
)
}
export default App
