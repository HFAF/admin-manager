import firebaseAuth from '@/plugins/firebase/auth';

export default {
  async signInWithGoogle() {
    await firebaseAuth.signInWithGoogle();
  },
  async signInWithTwitter() {
    await firebaseAuth.signInWithTwitter();
  },
  async signInWithFacebook() {
    await firebaseAuth.signInWithFacebook();
  },
  getCurrentUser() {
    return firebaseAuth.currentUser();
  }
};
