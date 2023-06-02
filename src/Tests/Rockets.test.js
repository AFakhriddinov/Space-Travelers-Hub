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
          id: 1,
          name: 'Falcon 1',
          description: 'Falcon 1 is good',
          reserved: false,
        },
        {
          id: 2,
          name: 'Falcon 2',
          description: 'Falcon 2 is huge',
          reserved: false,
        },
      ],
    };

    useSelector.mockReturnValue(mockedArray);
    useDispatch.mockReturnValue(jest.fn());

    render(<Rockets />);

    const rocketsList = screen.getAllByRole('listitem');
    expect(rocketsList).toHaveLength(mockedArray.rockets.length);
  });
});
