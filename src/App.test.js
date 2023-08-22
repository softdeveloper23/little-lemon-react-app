import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import BookingForm from './components/BookingForm';

test('render the header component', () => {
  const component = render(<Header />);
  const childElement = component.getByText("Little Lemon");
  expect(childElement).toBeInTheDocument();
});

test("render the bookingform component", () => {
  const component = render(<BookingForm />);
  const childElement = component.getByLabelText("Make A Reservation");
  expect(childElement).toBeInTheDocument();
});



