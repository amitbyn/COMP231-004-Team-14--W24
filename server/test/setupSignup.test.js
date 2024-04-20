// setupSignupTes.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Signup from '../../src/pages/signup/Signup'; // Adjust the path to match your actual file structure
import { registerUser } from '../../src/actions/authActions'; // Import your API function (mock it for testing)

// Mock the API function
jest.mock('../../actions/authActions', () => ({
  registerUser: jest.fn(),
}));

describe('Signup component', () => {
  it('handles login correctly', async () => {
    // Mock the API response
    const mockResponse = {
      status: 200,
      message: 'User registered successfully',
    };
    registerUser.mockResolvedValue(mockResponse);

    // Render the Signup component
    const { getByLabelText, getByText } = render(<Signup />);

    // Simulate user input
    const emailInput = getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    const passwordInput = getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'secret123' } });

    // Simulate form submission
    const submitButton = getByText('Sign Up');
    fireEvent.click(submitButton);

    // Wait for the API call to resolve
    await waitFor(() => {
      expect(registerUser).toHaveBeenCalledWith(
        'test@example.com',
        'user',
        'secret123'
      );
    });

    // Check if the page redirects to the home page
    expect(window.location.pathname).toBe('/');

    // You can add more assertions based on your component behavior
    // For example, check if the alert message is displayed when registration fails
  });
});
