// setupOrderTest.js
import React from 'react';
import { render } from '@testing-library/react';
import Orders from '../../src/pages/Orders/Orders'; // Adjust the path to match your actual file structure
import { getMyOrders } from '../../src/actions/cartActions'; // Import your API function (mock it for testing)

// Mock the API function
jest.mock('../../actions/cartActions', () => ({
  getMyOrders: jest.fn(),
}));

describe('Orders component', () => {
  it('renders orders correctly', async () => {
    // Mock the API response
    const mockOrders = [
      {
        id: 1,
        products: [{ name: 'Product A' }],
        totalPrice: 100,
        createdAt: '2023-05-01T12:34:56.789Z',
        status: 'completed',
      },
      // Add more mock orders as needed
    ];
    getMyOrders.mockResolvedValue({ orders: mockOrders });

    // Render the Orders component
    const { getByText } = render(<Orders />);

    // Check if the order details are displayed
    expect(getByText('Product A')).toBeInTheDocument();
    expect(getByText('$100')).toBeInTheDocument();
    expect(getByText('2023-05-01')).toBeInTheDocument();
    expect(getByText('COMPLETED')).toBeInTheDocument();


  });
});
