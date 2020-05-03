var admin = require("firebase-admin");

var serviceAccount = require("./dnd-aiv-firebase-adminsdk-2mxlw-2e9312cd7b.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://dnd-aiv.firebaseio.com"
});

async function createUser(request, response) {
    const email = request.body.email
    const password = request.body.password
    const displayName = request.body.displayName
    const phoneNumber = request.body.phoneNumber
    const photoURL = request.body.photoURL

    try {
        await admin.auth().createUser(
            {email, password, displayName, phoneNumber, photoURL}
        )
        response.send('Create!')
    } catch (e) { 
        response.send(JSON.stringify(e))
    }
}

async function listUsers(request, response) {
    try {
        const userRecord = await admin.auth().listUsers()
        response.render('admin/listUsers.ejs', {users: userRecord.users, error: false})
    } catch (e) {
        response.render('admin/listUsers.ejs', {users: false, error: e})
    }
}

async function verifyIdToken(idToken) {
    try {
        const decodedIdToken = await admin.auth().verifyIdToken(idToken)
        return decodedIdToken
    } catch (e) {
        return null
    }
}

module.exports = {
    createUser,
    listUsers,
}