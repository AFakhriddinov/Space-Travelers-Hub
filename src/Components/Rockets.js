import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
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
    <Container className="border-top" fluid>
      {rockets.map((rocket) => (
        <Row className="m-4" key={rocket.rocket_id}>
          <Col lg={2} className="m-2">
            <img
              className="rocket-images"
              alt=""
              src={rocket.flickr_images[0]}
            />
          </Col>
          <Col lg={8} className="m-2">
            <h4>{rocket.rocket_name}</h4>
            <p>{rocket.description}</p>
            <Button variant="primary">Reserve rocket</Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Rockets;
