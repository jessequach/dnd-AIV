const functions = require('firebase-functions');
const express = require('express')
const path = require('path')
const app = express()

exports.httpReq = functions.https.onRequest(app)

app.use(express.urlencoded({ extended: false }))
app.use('/public', express.static(path.join(__dirname, '/static')))

// Set Template Engine
app.set('view engine', 'ejs')
// Location of EJS
app.set('views', './ejsviews')

// ============================ //
// Start of frontend programming
// ============================ //

function frontendHandler(request, response) {
    response.sendFile(__dirname + '/admin/admin.html')
}

app.get('/admin', frontendHandler);

// ============================ //
// Start of backend programming
// ============================ //

const firebase = require('firebase')

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWZHXWup8FwWqnIYYywPEATEasY5RgobQ",
    authDomain: "dnd-aiv.firebaseapp.com",
    databaseURL: "https://dnd-aiv.firebaseio.com",
    projectId: "dnd-aiv",
    storageBucket: "dnd-aiv.appspot.com",
    messagingSenderId: "367012902540",
    appId: "1:367012902540:web:c93ed50786ab627df92da9",
    measurementId: "G-GHBV4TW7E7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Constants = require('./myconstants.js')

const character = require('./characterFeatures.js')
const characterClass = require('./model/characterClass.js')

app.get('/', async (request, response) => {

    let charToPush
    let classNames = ['Fighter', 'Monk', 'Rogue', 'Wizard']
    let classes = []

    for (let i = 0; i < classNames.length; i++) {
        charToPush = new characterClass(classNames[i], character.features(classNames[i]))
        classes.push(charToPush)
    }

    const coll = firebase.firestore().collection(Constants.COLLECTION_CHARACTERS)
    try {
        let characters = []
        const snapshots = await coll.orderBy("lastName").get()
        snapshots.forEach(doc => {
            characters.push({ id: doc.id, data: doc.data() })
        })
        response.render('home', { characters, classes })
    } catch (e) {
        response.send(e)
    }

})

app.get('/mob', (request, response) => {
    var testData = `
    {
        "persons":
        {
            "name": "John","class": "Merchant"   
        }
    }`
    obj = JSON.parse(testData)
    response.send(obj)
})