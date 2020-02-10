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

app.get('/login', frontendHandler);

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

app.get('/', (request, response) => {
    const obj = {
        _name: 'Berrik Rapidfist',
        _class: 'Monk',
        _level: 1,
        _race: 'Hill Dwarf',
        _alignment: 'Neutral Good',
        _exp: 0,
        _stats: ['hp', 'str', 'dex', 'con', 'int', 'wis', 'cha'],
        _skills: ['to','be','cont...'],
    }
    response.render('home', obj)
})