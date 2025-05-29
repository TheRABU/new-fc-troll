import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
  updateEmail,
} from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import app from "../firebase/firebase.config";
import { AuthContext } from "../contexts/AuthContext";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  const CreateNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (user, name) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    })
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  const resetPasswordWithEmail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  // update email address
  const updateUserEmail = (newEmail) => {
    return updateEmail(auth.currentUser, newEmail);
  };
  // update password
  const updateUserPassword = (newPassword) => {
    return updatePassword(user, newPassword);
  };
  // Google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      if (currentUser) {
        // get token and store client
        const userInfo = {
          email: currentUser.email,
          name: currentUser.displayName,
          photoURL: currentUser.photoURL,
        };
        const res = await axiosPublic.post(`/api/users/register`, userInfo);
        if (res.data.token) {
          localStorage.setItem("access-token", res.data.token);
        }
      } else {
        // remove token if stored on the client side (localstorage/client memory)
        localStorage.removeItem("access-token");
        setLoading(false);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [axiosPublic]);

  const value = {
    user,
    googleLogin,
    logout,
    loading,
    updateUserProfile,
    signIn,
    CreateNewUser,
    resetPasswordWithEmail,
    updateUserEmail,
    updateUserPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
