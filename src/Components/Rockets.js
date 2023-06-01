import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/RocketSlice';
import './styles/Rockets.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Rockets = () => {
  const { rockets } = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
        <hr />
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            {rocket.rocket_name}
            <img
              className='rocket-images'
              alt=''
              src={rocket.flickr_images[0]}
            />
          </li>
        ))}
      </ul></Col>
        <Col>2 of 2</Col>
      </Row>
    </Container>
    <div>
      
    </div>
  );
};

export default Rockets;
