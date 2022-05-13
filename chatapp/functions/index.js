const functions = require('firebase-functions');
/*
const admin = require('firebase-admin');
admin.initializeApp();

exports.myFunction = functions.firestore
 .document('chat/{message}')
 .onCreate((snapShot, context) => {
     return admin.messaging().sendToTopic('chat', {
         notification:{
            title: snapShot.data().username,
            body: snapShot.data().text,
            clickAction: 'FLUTTER_NOTIFICATION_CLICK',

          }
      }) ;
    });
*/

/*

admin.initializeApp(functions.config().firestore);
exports.sendNotification = functions.firestore.document(`Users/${user_id}/Notifications/${notification_id}`).onWrite(event => {});

const user_id = event.params.user_id;
const notification_id = event.params.notification_id;

console.log("User ID: " + user_id + "| Notifications ID : " + notification_id);
Share
Improv
*/