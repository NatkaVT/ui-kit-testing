import { render, screen } from '@testing-library/react';
import App from './App';
jest.mock('react-day-picker', () => ({
  DayPicker: jest.fn(() => <div role="date-picker" />)
}));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
