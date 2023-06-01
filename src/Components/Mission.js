import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({
  name, description,
}) => (
  <tr>
    <th className="heading" scope="row">{name}</th>
    <td className="heading col-lg-7">{description}</td>
    <td className="btns">
      <span className="badge text-bg-secondary">Not A Member</span>
    </td>
    <td className="btns">
      <button
        type="button"
        className="btn btn-outline-secondary test-small btn-sm"
      >
        Join Mission
      </button>
    </td>
  </tr>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
