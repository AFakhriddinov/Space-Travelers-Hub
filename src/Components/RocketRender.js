/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { bookRocket } from '../redux/rockets/RocketsSlice';
import './styles/Rockets.css';

const RocketRender = ({ rocket }) => {
  const dispatch = useDispatch();

  const [color, setColor] = useState(false);
  const updateColor = () => {
    setColor(!color);
  };
  const handleBooking = () => {
    dispatch(bookRocket(rocket.id));
  };

  return (
    <Row>
      <Col md={4} lg={3} xl={2} className="m-2">
        <Image
          className="rocket-images"
          src={rocket.flickr_images[0]}
          alt={rocket.rocket_name}
        />
      </Col>
      <Col md={8} lg={7} xl={8} className="m-2">
        <h4>{rocket.rocket_name}</h4>
        <p className="m-1">
          {rocket.reserved && (
            <Badge bg="success" className="m-1">
              Reserved
            </Badge>
          )}
          {rocket.description}
        </p>
        <Button
          // className={`${updateColor ? 'cancel-booking' : 'book-rocket'}`}
          onClick={() => {
            handleBooking();
            updateColor();
          }}
          variant={`${color ? 'outline-secondary' : 'primary'}`}
        >
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </Button>
      </Col>
    </Row>
  );
};

RocketRender.propTypes = {
  rocket: PropTypes.shape({
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RocketRender;
