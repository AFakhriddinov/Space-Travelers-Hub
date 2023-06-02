import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MyProfile from '../Components/MyProfile';

const mockedStore = configureStore([]);

const initialState = {
  rockets: {
    rockets: [
      { id: 1, name: 'Falcon 1', reserved: true },
      { id: 2, name: 'Falcon 2', reserved: false },
    ],
  },
  missions: {
    missions: [
      { mission_id: 1, mission_name: 'Mission for Falcon 1', reserved: true },
      { mission_id: 2, mission_name: 'Mission for Falcon 2', reserved: false },
    ],
  },
};

const store = mockedStore(initialState);

test('should display rockets and missions on profile page', () => {
  const { getByText } = render(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );

  expect(getByText('My Missions')).toBeInTheDocument();
  expect(getByText('Mission for Falcon 1')).toBeInTheDocument();
  expect(getByText('My Rockets')).toBeInTheDocument();
  expect(getByText('Falcon 1')).toBeInTheDocument();
  const listOfItems = screen.getAllByRole('listitem');
  expect(listOfItems).toHaveLength(2);
});
