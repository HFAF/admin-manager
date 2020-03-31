import firebase, { ProfileState } from 'firebase/app';
import 'firebase/auth';

export default {
  initializeAuth(): void {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  },

  currentUser() {
    return firebase.auth().currentUser;
  },

  async updateProfile({ displayName, photoURL }: ProfileState) {
    const user = firebase.auth().currentUser;
    if (user) {
      await user
        .updateProfile({
          displayName,
          photoURL
        })
        .catch((err) => {
          throw err;
        });
    }
    return firebase.auth().currentUser;
  },

  signInWithGoogle(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  },

  signInWithTwitter(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.TwitterAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  },

  signInWithFacebook(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  },

  async signOut(): Promise<void> {
    await firebase.auth().signOut();
  }
};
