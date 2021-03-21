import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebaseConfig';
import { AuthContext } from '../../utils/useAuth';

const HeaderComponent = props => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light  py-3">
      <div className="container bg-dc2 rounded">
        <Link className="navbar-brand warning" to="/">
        WALKER TRAVELLERS
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {!!user ? (
              <button onClick={() => app.auth().signOut()} className="btn btn-warning">
                Sign Out
              </button>
            ) : (
              <Link to="/login" className="btn btn-warning">
                Login
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
