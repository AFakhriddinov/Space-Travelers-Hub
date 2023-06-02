import React from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Rockets from '../Components/Rockets';
import store from '../Redux/store';

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

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const rocketsList = screen.getAllByRole('listitem');
    expect(rocketsList).toHaveLength(mockedArray.rockets.length);
  });
});
