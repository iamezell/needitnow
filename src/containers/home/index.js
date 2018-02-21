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
        <p>The Bigneed is changing history for the better! Everyone who signs up for this site will stand with me and become a force for change. To that end I pledge that this site will be the one place in the world where you make money just for being an active member, period. What you do on every other site, will get you paid here. There is no excuse for poverty, in this day and age. Thebigneed plans to prove it!</p>
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
          firebase.auth.EmailAuthProvider.PROVIDER_ID
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
         <div style={{fontSize: '1.5em', fontFamily: 'serif', lineHeight: '1.8em'}}><p>"Lately, I have been thinking about the United Airlines issue with customer service and Uber's scandals involving stealing from Google and sexually harassing women. It reminds me of the saying "You shall know a tree by its fruit" - and their fruit is spread all over the news! All that money and power, it's almost like the more money some companies make the less human their leaders become.</p>
         <br /><p><b style={{fontSize: '2em'}}>Issues like these are a direct consequence of society's  lack of loving and inspirational leaders.</b></p><br /><p>This is why I decided to start the big need, because its gotten so bad that some regular guy like myself must do the impossible and build a company that will show the Facebooks and the Googles of the world how to do it right. Amongst these greedy giants there is just little o'l me and my family. We call ourselves thebigneed. We are stepping onto the scene with a huge ridiculously big and impossible challenge. That is to change the way the economy and society as a whole work. To better it for everyone, from every elderly person to every unborn child.</p> <p>We are the little guys with a mission, a rock and a sling. We are thebigneed. We are Technology leaders who strive to love like King and innovate like Jobs. We who bring social empowerment and justice to the business world, and then execute on it. We seek to inspire and let inspiration be the mechanism of influence not greed. We disrupt conventions like Albert Einstein, We dream of a better world like Marting Luther king jr, We innovate in multiple spectrums like Steve Jobs, We refuse the status quo like Rosa Parks, We guide society to a better place like Harriet Tubman and and invent miracles like Nicola Tesla. We are thebigneed.</p> <p> So even though right now we are a small organization,
 we stand on the shoulders of giants! and from this vantage point its all too clear that society and business as a whole desperately need us. In short there is a big need for Thebigneed. Watch for us." <b>--Ezell</b></p><br /><br /><br /></div>
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
