import { render, screen } from '@testing-library/react';
import App from './App';
jest.mock('react-day-picker', () => ({
  DayPicker: jest.fn(() => <div role="date-picker" />)
}));

test('renders theme toggle button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/🌙|☀️/);
  expect(buttonElement).toBeInTheDocument();
});
