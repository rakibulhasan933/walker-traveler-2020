import React from 'react';
import { Link } from 'react-router-dom';
import bike from '../../images/Frame.png';
import car from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import train from '../../images/Group.png';


const HomePage = () => {
  return (
    <>
      <div className="py-150">
        <div className="container ">
          <div className="row g-3">
            <div className="col-lg-3">
              <Link to="/destinations/bike">
                <div className="card p-3 text-center">
                  <div className="icon">
                    <img className="width100" src={bike} alt="" />
                  </div>
                  <h2 className="mb-0 h3">Bike</h2>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/destinations/car">
                <div className="card p-3 text-center">
                  <div className="icon">
                    <img className="width100" src={car} alt="Car" />
                  </div>
                  <h2 className="mb-0 h3">Car</h2>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/destinations/bus">
                <div className="card p-3 text-center">
                  <div className="icon">
                    <img className="width100" src={bus} alt="" />
                  </div>
                  <h2 className="mb-0 h3">Bus</h2>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link to="/destinations/train">
                <div className="card p-3 text-center">
                  <div className="icon">
                    <img className="width100" src={train} alt="" />
                  </div>
                  <h2 className="mb-0 h3">Train</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
