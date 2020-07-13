import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDsWL-CKvtene91vdwoD8-2qt0Vzean5-E",
    authDomain: "e-commdb-37c85.firebaseapp.com",
    databaseURL: "https://e-commdb-37c85.firebaseio.com",
    projectId: "e-commdb-37c85",
    storageBucket: "e-commdb-37c85.appspot.com",
    messagingSenderId: "27558459364",
    appId: "1:27558459364:web:b0c58b1bc83d7e589079f1",
    measurementId: "G-MRNJCD3E4Q"
};

export const createUserProfile = async ( userAuth, additionalData ) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();


    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user ' + error.message )
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;