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

app.get('/a-create', frontendHandler);
app.get('/a-shop', frontendHandler);

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

const characterClass = require('./model/characterClass.js')
const characterFeatures = require('./characterFeatures.js')

app.get('/', async (request, response) => {

    let classNames = ['Fighter', 'Monk', 'Rogue', 'Wizard']
    let charToPush
    let classes = []

    for (let i = 0; i < classNames.length; i++) {
        charToPush = new characterClass(classNames[i], characterFeatures.getFeatures(classNames[i]))
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

app.get('/shop/:id', async (request, response) => {
    const coll = firebase.firestore().collection(Constants.COLLECTION_SHOPS)
    let shop = await coll.doc(request.params.id).get()

    // let shopSize = Object.keys(shop.data()['items']).length
    // let result = []
    // for (let i = 0; i < shopSize; i++) {
    //     if (Object.values(shop.data()['items'][i]).includes('Adventuring Gear')) {
    //         result.push(shop.data()['items'][i])
    //     }
    // }

    if (shop.data() != null) {
        response.send(shop.data())
    } else {
        response.send('No shop exists')
    }
})

app.get('/mob', (request, response) => {
    var testData = `
    {
        "shopID": "test shop 2",
        "data": {
            "name": "Jeri",
            "role": "Merchant",
            "health": "12"
        }
    }`
    obj = JSON.parse(testData)
    response.send(obj)
})