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

const RocketRender = ({
  name, id, image, description, reserved,
}) => {
  const dispatch = useDispatch();

  const [color, setColor] = useState(false);
  const updateColor = () => {
    setColor(!color);
  };
  const handleBooking = () => {
    dispatch(bookRocket(id));
  };

  return (
    <Row>
      <Col md={4} lg={3} xl={2} className="m-2">
        <Image className="rocket-images" src={image} alt={name} />
      </Col>
      <Col md={8} lg={7} xl={8} className="m-2">
        <h4>{name}</h4>
        <p className="m-1">
          {reserved && (
            <Badge bg="success" className="m-1">
              Reserved
            </Badge>
          )}
          {description}
        </p>
        <Button
          onClick={() => {
            handleBooking();
            updateColor();
          }}
          variant={`${color ? 'outline-secondary' : 'primary'}`}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </Button>
      </Col>
    </Row>
  );
};

RocketRender.propTypes = {
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketRender;
