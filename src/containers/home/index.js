import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
 import { Button, Jumbotron} from 'react-bootstrap';

var firebase = require('firebase');
var firebaseui = require('firebaseui');

const config = {
    apiKey: "AIzaSyB9IUKPRvoMFXO58zmSfzFfvcZZf4RIrYE",
    authDomain: "thebigneed.firebaseapp.com",
    databaseURL: "https://thebigneed.firebaseio.com",
    projectId: "thebigneed",
    storageBucket: "thebigneed.appspot.com",
    messagingSenderId: "1091055532587"
  };

  const jumbotronInstance = (
    <Jumbotron>
        <h1>You Now Have: $ dollars in your account.</h1>
        <p>Every active member of this site and any of its sister sites will get a percentage of the profits. Period. Become a part of history!</p>
        <p><Button bsStyle="primary">Learn more</Button></p>
    </Jumbotron>
);

/*const thumbnailInstance = (
    <Grid>
        <Row>
            <Col xs={6} md={4}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>&nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>&nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
            <Col xs={6} md={4}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                        <Button bsStyle="primary">Button</Button>&nbsp;
                        <Button bsStyle="default">Button</Button>
                    </p>
                </Thumbnail>
            </Col>
        </Row>
    </Grid>
);*/

const uiConfig = {
        signInSuccessUrl: 'platform',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: 'platform'
    };


export class Home extends Component {
    constructor() {
        super()
        firebase.initializeApp(config)
        // Initialize the FirebaseUI Widget using Firebase.
        this.ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        this.ui.start('#firebaseui-auth-container', uiConfig);

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log(user)
            }
        })
        this.state = {
            expanded: false,
        };
    }




render() {
    return (
        <div>
         {jumbotronInstance} 
         <div id="firebaseui-auth-container"></div>
        </div>
    );
}
}



const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
        changePage: () => push('/about-us')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
