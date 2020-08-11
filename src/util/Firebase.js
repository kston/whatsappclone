const firebase = require('firebase');
require('firebase/firestore');

export class Firebase {
  constructor() {
    this._firebaseConfig = {
      apiKey: 'AIzaSyCsQSNPWfohRsZPbHgHVYLzLDWaacZSNVM',
      authDomain: 'whatsappclone-54506.firebaseapp.com',
      databaseURL: 'https://whatsappclone-54506.firebaseio.com',
      projectId: 'whatsappclone-54506',
      storageBucket: 'whatsappclone-54506.appspot.com',
      messagingSenderId: '605140237944',
      appId: '1:605140237944:web:d5295bc509d61e0f13378d',
    };

    this.init();
  }

  init() {
    if (!window._initializedFirebase) {
      firebase.initializeApp(this._firebaseConfig);

      window._initializedFirebase = true;
    }
  }

  static db() {
    return firebase.firestore();
  }

  static hd() {
    return firebase.storage;
  }

  initAuth() {
    return new Promise((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          let token = result.credential.accessToken;
          let user = result.user;

          resolve({
            user,
            token,
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
