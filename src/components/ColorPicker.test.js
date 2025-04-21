import { render, screen, fireEvent } from '@testing-library/react';
import ColorPicker from './ColorPicker';

describe('ColorPicker Component', () => {
  test('renders ColorPicker correctly', () => {
    render(<ColorPicker colors={['#9F2957', '#D90056', '#E25D33']} />);
    const colorPickerElement = screen.getByText('Colours');
    expect(colorPickerElement).toBeInTheDocument();
  });

  test('allows color selection', () => {
    const handleColorSelect = jest.fn();
    render(<ColorPicker colors={['#9F2957', '#D90056', '#E25D33']} onColorSelect={handleColorSelect} />);
    const colorElements = screen.getAllByTestId('color-el');
    fireEvent.click(colorElements[0]);
    expect(handleColorSelect).toHaveBeenCalledWith('#9F2957');
  });
  test('change color selection', () => {
    const handleColorSelect = jest.fn();
    render(<ColorPicker colors={['#9F2957', '#D90056', '#E25D33']} onColorSelect={handleColorSelect} />);
    const colorElements = screen.getAllByTestId('color-el');
    fireEvent.click(colorElements[0]);
    expect(handleColorSelect).toHaveBeenCalledWith('#9F2957');
    expect(colorElements[0].parentElement).toHaveClass('selected');
    fireEvent.click(colorElements[1]);
    expect(handleColorSelect).toHaveBeenCalledWith('#D90056');
    expect(colorElements[1].parentElement).toHaveClass('selected');
    expect(colorElements[0].parentElement).not.toHaveClass('selected');
  });
});
