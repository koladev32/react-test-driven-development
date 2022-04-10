import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('renders counter component', () => {
    render(<Counter value={2} />);
    const counterElement = screen.getByTestId("counter-test");
    
    // Testing that the counter element is rendered
    expect(counterElement).toBeInTheDocument();

    // Testing that the counter element has the correct value
    expect(counterElement).toHaveTextContent("2");
});