"use strict";

// ========== GLOBAL FIREBASE CONFIG ========== //
let firebaseConfig = {
  apiKey: "AIzaSyB_hzIzGveoKkzeV6qVqm1OlX_EfTa24yE",
  authDomain: "kunstemuseum.firebaseapp.com",
  databaseURL: "https://kunstemuseum.firebaseio.com",
  projectId: "kunstemuseum",
  storageBucket: "kunstemuseum.appspot.com",
  messagingSenderId: "996800259116",
  appId: "1:996800259116:web:b940f8cf566ceb78c81d89"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const _db = firebase.firestore();

let ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
    }
  ],
  // Other config options...
});

firebase.auth().onAuthStateChanged(function (user) {
  if (user) { // if user exists and is authenticated
    userAuthenticated(user);
  } else { // if user is not logged in
    userNotAuthenticated();
  }
});

function userAuthenticated(user) {
  _currentUser = user;
  init();
}

// sign out user
function logout() {
  firebase.auth().signOut();
  showPage("login");
}

function init() {
  // init user data and favourite movies
  _userRef.doc(_currentUser.uid).onSnapshot({
    includeMetadataChanges: true
  }, function (userData) {
    if (!userData.metadata.hasPendingWrites && userData.data()) {
      _currentUser = {
        ...firebase.auth().currentUser,
        ...userData.data()
      }; //concating two objects: authUser object and userData objec from the db

    }
  });
}
