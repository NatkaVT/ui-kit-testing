import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  test('renders Dropdown correctly', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} defaultOption="Option 1"/>);
    const dropdownElement = screen.getByRole('button');
    expect(dropdownElement).toBeInTheDocument();
    expect(dropdownElement).toHaveTextContent('Option 1');
  });

  test('selects an option and updates displayed value', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} />);
    const dropdownElement = screen.getByRole('button');
    fireEvent.click(dropdownElement);
    fireEvent.click(screen.getByText('Option 1'));
    expect(dropdownElement).toHaveTextContent('Option 1');
  });
});
