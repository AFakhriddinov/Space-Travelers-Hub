import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/RocketSlice';
import './styles/Rockets.css';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <hr />
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            {rocket.rocket_name}
            <img
              className="rocket-images"
              alt=""
              src={rocket.flickr_images[0]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
