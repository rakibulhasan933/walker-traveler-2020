import React from 'react';
import GoogleMap from '../GoogleMap/GoogleMap';
import { useParams } from 'react-router';
import destinationData from '../../demoData/destinations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLevelDownAlt, faDollarSign, faUsers } from '@fortawesome/free-solid-svg-icons';

const SearchResult = () => {
  const { place } = useParams();
  const placeInfo = destinationData.find(item => item.key === place);
  const location = placeInfo.location;
  const { pickTo, pickFrom } = placeInfo;
  return (
    <>
      <div className="py-100">
        <div className="container ">
          <div className="row">
            <div className="col-lg-4 mb-3">
              <div className="card p-3 ">
                <h3>
                  Riding with {placeInfo.name} <img className="width40" src={placeInfo.img} alt="" />
                </h3>

                <ul className="list-unstyled bg-primary p-3 rounded text-light">
                  <li className="mb-2">{pickFrom}</li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon={faLevelDownAlt} />
                    <FontAwesomeIcon icon={faLevelDownAlt} />
                  </li>
                  <li>{pickTo}</li>
                </ul>
                <ul className="list-unstyled mb-0">
                  <li className="bg-light p-2 rounded d-flex justify-content-between align-items-center mb-2">
                    <span>
                      <img className="width40" src={placeInfo.img} alt={placeInfo.name} />
                    </span>
                    <span>
                      {placeInfo.person} <FontAwesomeIcon icon={faUsers} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faDollarSign} /> {placeInfo.person}
                    </span>
                  </li>
                  <li className="bg-light p-2 rounded d-flex justify-content-between align-items-center mb-2">
                    <span>
                      <img className="width40" src={placeInfo.img} alt={placeInfo.name} />
                    </span>
                    <span>
                      {placeInfo.person} <FontAwesomeIcon icon={faUsers} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faDollarSign} /> {placeInfo.person}
                    </span>
                  </li>
                  <li className="bg-light p-2 rounded d-flex justify-content-between align-items-center mb-2">
                    <span>
                      <img className="width40" src={placeInfo.img} alt={placeInfo.name} />
                    </span>
                    <span>
                      {placeInfo.person} <FontAwesomeIcon icon={faUsers} />
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faDollarSign} /> {placeInfo.person}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-8">
              <GoogleMap location={location} zoomLevel={20} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
