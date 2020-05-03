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

app.get('/a-character', frontendHandler);
app.get('/a-shop', frontendHandler);
app.get('/a-npc', frontendHandler);

// ============================ //
// Start of backend programming
// ============================ //

const session = require('express-session')
app.use(session(
    {
        secret: 'asdf1234',
        name: '__session',
        saveUninitialized: false,
        resave: false,
        secure: true, // https
        maxAge: 1000 * 60 * 60 * 2, // 2 hours
        rolling: true, // reset maxAge at every response
    }
))

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
    const user = firebase.auth().currentUser

    let classNames = ['Fighter', 'Monk', 'Rogue', 'Wizard']
    let charToPush
    let classes = []

    for (let i = 0; i < classNames.length; i++) {
        charToPush = new characterClass(classNames[i], characterFeatures.getFeatures(classNames[i]), characterFeatures.getSubclasses(classNames[i]))
        classes.push(charToPush)
    }

    const coll = firebase.firestore().collection(Constants.COLLECTION_CHARACTERS)
    try {
        let characters = []
        const snapshots = await coll.orderBy("lastName").get()
        snapshots.forEach(doc => {
            characters.push({ id: doc.id, data: doc.data() })
        })
        response.cookie("Set-Cookie", "Secure;SameSite=Strict");
        response.render('home', { user, characters, classes })
    } catch (e) {
        response.send(e)
    }

})

app.get('/characters', async (request, response) => {
    const coll = firebase.firestore().collection(Constants.COLLECTION_CHARACTERS)
    try {
        let characters = []
        const snapshots = await coll.get()
        snapshots.forEach(doc => {
            characters.push({ id: doc.id, data: doc.data() })
        })
        response.send(characters)
    } catch (e) {
        response.send(e)
    }
})

app.get('/signup', (request, response) => {
    response.setHeader('Cache-Control', 'private')
    response.render('signup.ejs')
})

app.get('/signin', (request, response) => {
    response.setHeader('Cache-Control', 'private')
    response.render('signin.ejs', { error: false, user: request.decodedIdToken, cartCount: 0 })
})

app.post('/signin', async (request, response) => {
    const email = request.body.email
    const password = request.body.password
    const auth = firebase.auth()
    try {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
        const userRecord = await auth.signInWithEmailAndPassword(email, password)
        await auth.signOut

        request.session.idToken = idToken

        if (userRecord.user.email === Constants.SYSADMINEMAIL) {
            response.setHeader('Cache-Control', 'private')
            response.redirect('/admin/sysadmin')
        } else {
            response.setHeader('Cache-Control', 'private')
            response.redirect('/')
        }
    } catch (e) {
        response.render('signin', { error: e })
    }
})

app.get('/signout', async (request, response) => {
    request.session.destroy(err => {
        if (err) {
            console.log('==== session.destroy error: ', err)
            request.session = null
            response.send('Error: sign out (session.destroy error)')
        } else {
            response.redirect('/')
        }
    })
})

/*
    Admin API
*/
const adminUtil = require('./adminUtil.js')
app.post('/admin/signup', (request, response) => {
    return adminUtil.createUser(request, response)
})

app.get('/adminPanel', authSysAdmin, (request, response) => {
    response.render('adminPanel')
})

function authSysAdmin(request, response, next) {
    try {
        const decodedIdToken = await adminUtil.verifyIdToken(request.session.idToken)
        if (!decodedIdToken || !decodedIdToken.email || decodedIdToken.email !== Constants.SYSADMINEMAIL) {
            return response.send('<h1>System Admin Page: Access Denied!</h1>')
        }
        if (decodedIdToken.uid) {
            request.decodedIdToken = decodedIdToken
            return next()
        }
        return response.send('<h1>System Admin Page: Access Denied!</h1>')
    } catch (e) {
        return response.send('<h1>System Admin Page: Access Denied!</h1>')
    }
}
/*
    GET Shop Functions
*/
app.get('/shops', async (request, response) => {
    const coll = firebase.firestore().collection(Constants.COLLECTION_SHOPS)
    try {
        let shops = []
        const snapshots = await coll.get()
        snapshots.forEach(doc => {
            shops.push({ id: doc.id, data: doc.data() })
        })
        response.send(shops)
    } catch (e) {
        response.send(e)
    }
})

app.get('/shop/:id', async (request, response) => {
    const coll = firebase.firestore().collection(Constants.COLLECTION_SHOPS)
    let shop = await coll.doc(request.params.id).get()
    if (shop.data() != null) {
        response.send(
            shop.data()
        )
    } else {
        response.send(`
        No shop exists under '${request.params.id}'. Possibly check spelling/capitalization.
        `)
    }
})

/*
    GET NPC Functions
*/
app.get('/npcs', async (request, response) => {
    const coll = firebase.firestore().collection(Constants.COLLECTION_NPCS)
    try {
        let npcs = []
        const snapshots = await coll.get()
        snapshots.forEach(doc => {
            npcs.push({ id: doc.id, data: doc.data() })
        })
        response.send(npcs)
    } catch (e) {
        response.send(e)
    }
})

app.get('/npc/:id', async (request, response) => {
    const coll = firebase.firestore().collection(Constants.COLLECTION_NPCS)
    let npc = await coll.doc(request.params.id).get()
    if (npc.data() != null) {
        response.send(
            npc.data()
        )
    } else {
        response.send(`
        No npc exists under '${request.params.id}'. Possibly check spelling/capitalization.
        `)
    }
})

app.get('/npcs/:alignment', async (request, response) => {
    const coll = firebase.firestore().collection(Constants.COLLECTION_NPCS)
    try {
        let npcs = []
        const snapshots = await coll.where('alignment', '==', `${request.params.alignment}`).get()
        snapshots.forEach(doc => {
            npcs.push({ id: doc.id, data: doc.data() })
        })
        response.send(npcs)
    } catch (e) {
        response.send(e)
    }
})

