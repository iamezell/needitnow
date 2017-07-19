import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


function handleTouchTap() {
    alert('onTouchTap triggered on the title component');
}


const App = () => {
    return (
        <MuiThemeProvider>
        <div>
        <header>
        <AppBar
    title='Black Power Games'
    titleStyle={{textAlign: 'center', font:'Roboto'}}
    onTitleTouchTap={handleTouchTap}
    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    style={{backgroundColor: 'black'}}
/>
</header>

    <main>
    <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        </main>
        </div>
        </MuiThemeProvider>
)
}
export default App
