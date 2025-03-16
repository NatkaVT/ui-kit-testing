import { render, screen, fireEvent } from '@testing-library/react';
import SelectMenu from './SelectMenu';

describe('SelectMenu Component', () => {
  test('renders SelectMenu correctly', () => {
    render(<SelectMenu />);
    const selectMenuElement = screen.getByRole('select-menu');
    expect(selectMenuElement).toBeInTheDocument();
  });

  test('allows selection of options', () => {
    render(<SelectMenu />);
    const selectMenuElement = screen.getByRole('select-menu');
    fireEvent.click(selectMenuElement);
    const optionElement = screen.getByText('12:30 pm');
    expect(optionElement).toBeInTheDocument();
    fireEvent.click(optionElement);
    expect(selectMenuElement).toHaveTextContent('12:30 pm');
  });

});
