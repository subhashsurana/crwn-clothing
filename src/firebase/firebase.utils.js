import firebase from 'firebase/app';

import 'firebase/firestore'
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAnFZEcE4RdknK_NI1wvTel-EE2YSTeWEI",
    authDomain: "crwn-db-656c9.firebaseapp.com",
    databaseURL: "https://crwn-db-656c9.firebaseio.com",
    projectId: "crwn-db-656c9",
    storageBucket: "",
    messagingSenderId: "13651956236",
    appId: "1:13651956236:web:3f700649bd657ec0"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {

            console.log('error creating user', error.message);
        }
    }
    return userRef;
};


firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


