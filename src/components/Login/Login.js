import React, { useState, useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { withRouter, Redirect, useHistory, useLocation } from 'react-router';
import app from '../../firebaseConfig';
import { AuthContext } from '../../utils/useAuth';
import * as firebase from 'firebase/app';


const Login = () => {
  const [returningUser, setReturningUser] = useState(false);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: '/' } };
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = useCallback(
    async data => {
      const { email, password } = data;
      try {
        await app.auth().signInWithEmailAndPassword(email, password);
        history.replace(from);
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const onCreateSubmit = useCallback(
    async data => {
      const { email, password, firstName } = data;
      try {
        await app.auth().createUserWithEmailAndPassword(email, password);
        history.replace(from);
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignInWithGoogle = () => {
    app
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(token,user);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorMessage, errorCode, email,credential);
      });
  };
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignInWithFb = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then(result => {
        var credential = result.credential;
        var user = result.user;
        var accessToken = credential.accessToken;
        console.log(accessToken,user);
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorMessage, errorCode, email,credential);
      });
  };

  const { user } = useContext(AuthContext);
  if (user) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="py-100">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto">
              {returningUser ? (
                <div className="card p-5">
                  <form onSubmit={handleSubmit(onSubmit)} className="">
                    <h3 className="mb-5">Login to your account</h3>

                    <input placeholder="Username or Email" type="email" className="form-control mb-2" name="email" ref={register({ required: true })} />
                    <input placeholder="Password" type="password" name="password" className="form-control mb-2" ref={register({ required: true })} />
                    <div className="d-grid">
                      <button className="btn btn-success  btn-block" type="submit">
                        Login
                      </button>
                    </div>
                  </form>
                  <p className="text-center danger mt-3">
                    Don't have an account?
                    <span className="text-info ms-2 cursor-pointer" onClick={() => setReturningUser(false)}>
                      Create an account
                    </span>
                  </p>
                </div>
              ) : (
                <div className="card p-5">
                  <form onSubmit={handleSubmit(onCreateSubmit)} className="">
                    <h3 className="mb-5 text-center">Create an account</h3>
                    <input placeholder="First Name" type="text" className="form-control mb-2" name="firstName" ref={register({ required: true })} />
                    {errors.firstName && <span className="error">First Name is required</span>}
                    <input placeholder="Last Name" type="text" className="form-control mb-2" name="lastName" ref={register({ required: true })} />
                    {errors.lastName && <span className="error">Last Name is required</span>}
                    <input placeholder="Email" type="email" className="form-control mb-2" name="email" ref={register({ required: true })} />
                    {errors.email && <span className="error">Email is required</span>}
                    <input placeholder="Password" type="password" className="form-control mb-2" name="password" ref={register({ required: true })} />
                    {errors.password && <span className="error">Password is required</span>}

                    <input
                      placeholder="Confirm Password"
                      type="password"
                      className="form-control mb-4"
                      name="confirm_password"
                      ref={register({
                        validate: value => value === watch('password'),
                      })}
                    />
                    {errors.confirm_password && <span className="error danger ">Passwords don't match.</span>}
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary btn-block">
                        Create an account
                      </button>
                    </div>
                  </form>
                  <p className="text-center mt-3">
                    Already have an account?{' '}
                    <span onClick={() => setReturningUser(true)} className="text-primary cursor-pointer">
                      Login
                    </span>
                  </p>
                </div>
              )}

              <div className="p-5 d-grid">
                <p className="text-center lead mb-3">Or continue with</p>
                <button onClick={handleSignInWithGoogle} className="btn  btn-danger mb-3 d-block ">
                  Continue with Google
                </button>
                <button onClick={handleSignInWithFb} className="btn btn-primary d-block ">
                  Continue with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(Login);
