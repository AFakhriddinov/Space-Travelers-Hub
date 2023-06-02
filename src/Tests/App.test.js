import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/store';

test('renders space', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const navElement = screen.getByText(/Space Travelers hub/i);
  expect(navElement).toBeInTheDocument();
});
