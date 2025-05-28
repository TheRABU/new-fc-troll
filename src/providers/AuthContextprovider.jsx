import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  getAuth,
  updateProfile,
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
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => console.log(error.message));
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
        setLoading(false);
        console.log(currentUser);
      }

      //   if (currentUser) {
      //     // get token and store client
      //     const userInfo = {
      //       email: currentUser.email,
      //     };
      //     const res = await axiosPublic.post(`/api/jwt/generateToken`, userInfo);
      //     if (res.data.token) {
      //       localStorage.setItem("access-token", res.data.token);
      //       setLoading(false);
      //     }
      //   } else {
      //     // remove token if stored on the client side (localstorage/client memory)
      //     localStorage.removeItem("access-token");
      //     setLoading(false);
      //   }
    });

    return () => unsubscribe();
  }, [axiosPublic]);

  const value = {
    user,
    googleLogin,
    logout,
    loading,
    updateUserProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
