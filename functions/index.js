const express  = require('express');
const functions = require('firebase-functions');
const firebase = require('firebase-admin')
const engine = require('consolidate')
const app = express();
app.engine('hbs', engine.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

const firebaseApp = firebase.initializeApp(
  functions.config().firebase
);

function getFacts() {
    const ref = firebaseApp.database().ref('facts')
    return ref.once('value').then(snap => snap.val())
}
app.get('/', (req, res)=>{
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    getFacts().then(facts => {
        return res.render('index', {facts});
    }).catch((err) => res.send(err))
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

exports.app = functions.https.onRequest(app);
