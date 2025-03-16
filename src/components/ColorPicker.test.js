import { render, screen, fireEvent } from '@testing-library/react';
import ColorPicker from './ColorPicker';

describe('ColorPicker Component', () => {
  test('renders ColorPicker correctly', () => {
    render(<ColorPicker colors={['#9F2957', '#D90056', '#E25D33']} />);
    const colorPickerElement = screen.getByRole('colorbox');
    expect(colorPickerElement).toBeInTheDocument();
  });

  test('allows color selection', () => {
    const handleColorSelect = jest.fn();
    render(<ColorPicker colors={['#9F2957', '#D90056', '#E25D33']} onColorSelect={handleColorSelect} />);
    const colorElements = screen.getAllByTestId('color-el');
    fireEvent.click(colorElements[0]);
    expect(handleColorSelect).toHaveBeenCalledWith('#9F2957');
  });
});
