import firebase from "firebase";
import 'firebase/firestore';

const firestore = firebase.firestore(); // 


// This will query or return identifier for the 'users' collection, cartItems and document with the last id
firestore.collection('users').doc('gMf1FxXA4h7tgGbbIHGH').collection('cartItems').doc('mtR94pg4hh76KaxuFCDO'); 

// Another way to query the final document
firestore.doc('users/gMf1FxXA4h7tgGbbIHGH/cartItems/mtR94pg4hh76KaxuFCDO')

// Another way to query just the collection
firestore.collection('users/gMf1FxXA4h7tgGbbIHGH/cartItems');
