// Login.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from '../../src/pages/login/Login'; // Adjust the path to match your actual file structure

test('renders the Login component', () => {
  // Render the Login component
  const { getByLabelText, getByText } = render(<Login />);

  // Simulate user input
  const emailInput = getByLabelText('Email');
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

  const passwordInput = getByLabelText('Password');
  fireEvent.change(passwordInput, { target: { value: 'secret123' } });

  // Simulate form submission
  const loginButton = getByText('Login');
  fireEvent.click(loginButton);

 
});
