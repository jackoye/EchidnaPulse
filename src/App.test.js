// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EchidnaPulse title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EchidnaPulse/i);
    expect(titleElement).toBeInTheDocument();
});
