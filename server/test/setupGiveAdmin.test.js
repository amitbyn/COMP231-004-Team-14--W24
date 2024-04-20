// setupGiveAdminTest.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import GiveAdmin from './GiveAdmin'; // Adjust the path to match your actual file structure
import { giveAdmin } from '../actions/authActions'; // Import your API function (mock it for testing)

// Mock the API function
jest.mock('../actions/authActions', () => ({
  giveAdmin: jest.fn(),
}));

describe('GiveAdmin component', () => {
  it('calls giveAdmin function and displays alert message', async () => {
    // Mock the API response
    const mockResponse = {
      status: 200,
      message: 'Admin granted successfully',
    };
    giveAdmin.mockResolvedValue(mockResponse);

    // Render the GiveAdmin component
    render(<GiveAdmin />);

    // Wait for the API call to resolve
    await waitFor(() => {
      expect(giveAdmin).toHaveBeenCalledWith(token);
    });

    // Check if the alert message is displayed
    expect(window.alert).toHaveBeenCalledWith('Admin granted successfully');
  });
});
