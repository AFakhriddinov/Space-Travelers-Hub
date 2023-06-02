import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Myprofile from '../Components/Myprofile';

const mockedStore = configureStore([]);

const initialState = {
  missions: {
    missions: [
      { id: 1, name: 'Mission 1', reserved: true },
      { id: 2, name: 'Mission 2', reserved: false },
    ],
  },
  rockets: {
    rockets: [
      { rocket_id: 1, rocket_name: 'Rocket  1', reserved: true },
      { rocket_id: 2, rocket_name: 'Rocket  2', reserved: false },
    ],
  },
};

const store = mockedStore(initialState);

test('should display rockets and missions on profile page', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Myprofile />
    </Provider>,
  );

  expect(getByText('My Missions')).toBeInTheDocument();
  expect(getByText('Mission 1')).toBeInTheDocument();
  expect(getByText('My Rockets')).toBeInTheDocument();
  expect(getByText('Rocket 1')).toBeInTheDocument();
  const listOfItems = screen.getAllByRole('cell');
  expect(listOfItems).toHaveLength(2);
});
