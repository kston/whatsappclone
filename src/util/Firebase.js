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
    if (!this._initialized) {
      firebase.initializeApp(this._firebaseConfig);

      this._initialized = true;
    }
  }

  static db() {
    return firebase.firestore();
  }

  static hd() {
    return firebase.storage;
  }
}
