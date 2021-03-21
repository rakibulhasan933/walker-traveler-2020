import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import destinationData from '../../demoData/destinations';
import GoogleMap from '../GoogleMap/GoogleMap';
// import HeaderComponent from '../HeaderComponent/HeaderComponent';

const SetDestination = () => {
  const { place } = useParams();
  const placeInfo = destinationData.find(item => item.key === place);
  const { location, name, img, pickFrom, pickTo } = placeInfo;
  return (
    <>
      <div className="py-100">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-4 mb-3">
              <div className="card p-3">
                <h3>
                  Riding with {name} <img className="width40" src={img} alt={name} />
                </h3>
                <form>
                  <div className="form-group mb-2">
                    <label for="origin">Pick From</label>
                    <input type="text" className="form-control" id="origin" placeholder={pickFrom} />
                  </div>
                  <div className="form-group mb-2">
                    <label for="origin">Pick To</label>
                    <input type="text" className="form-control" id="destination" placeholder={pickTo} />
                  </div>

                  <div className="form-group  mb-2">
                    <label htmlFor="startingDate">Date From</label>
                    <input type="date" placeholder="03/03" id="startingDate" className="form-control" />
                  </div>

                  <div className="form-group  mb-4">
                    <label htmlFor="startingDate">Date To</label>
                    <input type="date" placeholder="03/03" id="startingDate" className="form-control" />
                  </div>

                  <Link to={'/search-result/' + placeInfo.key} className="btn-block d-block btn btn-primary">
                    Search
                  </Link>
                </form>
              </div>
            </div>
            <div className="col-md-8">
              <GoogleMap location={location} zoomLevel={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetDestination;
