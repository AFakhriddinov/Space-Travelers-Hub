import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import Missions from '../Components/Missions';

jest.mock('react-redux');

describe('Should render correct missions', () => {
  test('Should render missions', () => {
    const mockedArray = [
      {
        id: '1',
        name: 'Mission 1',
        description: 'Mission 1 is good',
        reserved: true,
      },
      {
        id: '2',
        name: 'Mission 2',
        description: 'Description 2 is nice',
        reserved: false,
      },
    ];

    useSelector.mockReturnValue(mockedArray);
    useDispatch.mockReturnValue(jest.fn());
    render(<Missions />);

    const missionsLen = screen.getAllByText(/Mission /i);
    expect(missionsLen).toHaveLength(mockedArray.length);
  });
});
