import React, { useState, createContext, useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import app from '../firebaseConfig';

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged(usr => {
      setUser(usr);
      setPending(false);
    });
  }, []);
  if (pending) {
    return (
      <>
        <h1 className="display-1 py-5 text-success text-center">Welcome</h1>
      </>
    );
  }
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};
// export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!user ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: routeProps.location },
            }}
          />
        )
      }
    />
  );
};

const Auth = () => {
  const [user, setUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged(function (user) {
      if (user) {
        const currUser = user;
        setUser(currUser);
        setPending(false);
      }
    });
  }, []);

  const signIn = (email, password) => {
    return app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Auth page', res.user);
        window.history.back();
      })
      .catch(err => alert(err));
  };

  const signUp = (email, password, name) => {
    return app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        app
          .auth()
          .currentUser.updateProfile({
            displayName: name,
          })
          .then(() => {
            window.history.back();
          });
      })
      .catch(err => alert(err));
  };

  const signOut = () => {
    return app
      .auth()
      .signOut()
      .then(res => console.log(res.user))
      .catch(err => alert(err));
  };
  return {
    signIn,
    signUp,
    signOut,
  };
};

export default Auth;
