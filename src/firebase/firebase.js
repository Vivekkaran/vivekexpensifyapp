import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((data) => {
// //       expenses.push({
// //         id: data.key,
// //         ...data.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((data) => {
// //     expenses.push({
// //       id: data.key,
// //       ...data.val()
// //     });
// //   });
// //   console.log(expenses);
// // });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 109500,
//   createdAt: 976123498763
// });





// // database.ref().on('value', (snapshot) => {
// //   console.log(`${snapshot.val().name} is a ${snapshot.val().job.title} at ${snapshot.val().job.company}`);
// // }, (e) => {
// //   console.log('Error with data fetching', e);
// // });



// // database.ref().set({
// //   name: 'Vivek Karunakaran',
// //   age: 26,
// //   stressLevel: 5,
// //   job: {
// //     title: 'Software Developer',
// //     company: 'Facebook'
// //   },
// //   location: {
// //     city: 'Halifax',
// //     country: 'Canada'
// //   }
// // }).then(() => {
// //   console.log('Data is saved!');
// // }).catch((e) => {
// //   console.log('This failed', e);
// // });

// // database.ref()
// // .update({
// //   stressLevel: 9,
// //   'job/company': 'Amazon',
// //   'location/city': 'Vancouver'
// // });

// // database.ref()
// // .remove()
// // .then(() => {
// //   console.log('Removed the data');
// // })
// // .catch((e) => {
// //   console.log('Remove Error', e);
// // });