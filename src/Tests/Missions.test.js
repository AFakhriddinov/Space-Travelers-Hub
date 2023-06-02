import React from 'react';
import { render, screen } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Missions from '../Components/Missions';

jest.mock('react-redux');

describe('Should display correct missions', () => {
  test('Should display missions', () => {
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
        description: 'Mission 2 is useful ',
        reserved: false,
      },
    ];

    useSelector.mockReturnValue(mockedArray);
    useDispatch.mockReturnValue(jest.fn());

    render(<Missions />);

    const missionsLen = screen.getAllByRole('rowgroup');
    expect(missionsLen).toHaveLength(mockedArray.length);
  });
});
