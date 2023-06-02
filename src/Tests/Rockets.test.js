import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Rockets from '../Components/Rockets';

jest.mock('react-redux');

describe('Display rockets', () => {
  test('Should show all rockets', () => {
    const mockedArray = {
      rockets: [
        {
          rocket_id: 1,
          rocket_name: 'Falcon 1',
          description: 'Falcon 1 is good',
          reserved: false,
        },
        {
          rocket_id: 2,
          rocket_name: 'Falcon 2',
          description: 'Falcon 2 is huge',
          reserved: false,
        },
      ],
    };

    useSelector.mockReturnValue(mockedArray);
    useDispatch.mockReturnValue(jest.fn());

    render(<Rockets />);

    const rocketsList = screen.getAllByRole('heading');
    expect(rocketsList).toHaveLength(mockedArray.rockets.length);
  });
});
