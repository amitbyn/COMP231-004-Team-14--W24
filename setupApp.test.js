// App.test.js
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter for testing routes
import App from '../../src/App'; // Adjust the path to match your actual file structure
import { getUserDetails, giveAdmin } from '../../src/actions/utils'; // Import your utility functions (mock them for testing)

// Mock the utility functions
jest.mock('./actions/utils', () => ({
  getUserDetails: jest.fn(),
  giveAdmin: jest.fn(),
}));

describe('App component', () => {
  it('renders routes correctly', async () => {
    // Mock the user details and admin function
    getUserDetails.mockReturnValue({}); // Mock an empty user object
    giveAdmin.mockResolvedValue({}); // Mock a successful admin response

    // Render the App component with MemoryRouter
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Check if the homepage route is rendered
    expect(getByText('Homepage')).toBeInTheDocument();


  });
});
