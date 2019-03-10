const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection('notifications')
    .add({
      content: `${user.displayName} joined the chatroom.`,
      createdOn: admin.firestore.FieldValue.serverTimestamp()
    })
    .then((doc) => console.log('Notification added', doc))
    .catch((err) => console.log('Notification error', err))
});
