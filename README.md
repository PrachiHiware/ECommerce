# E-commerce Store App

This is a simple React-based E-commerce Store app that allows users to add items to their cart, apply discount codes, and place orders. Every nth order is eligible for a discount, and discount codes can be generated for admin use.

## Features

- Users can add items to their cart.
- Checkout functionality to place orders.
- Discount codes for every nth order (e.g., every 3rd order) with a 10% discount.
- Discount code generation for admins.
- Display of purchase information including the total number of items, total purchase amount, and discount codes applied.

## Getting Started

1. Clone the repository to your local machine.

2. Install the required dependencies using npm or yarn:

   ```
   npm install
   ```

3. Run the development server:

   ```
   npm start
   ```

4. Access the app in your web browser at `http://localhost:3000`.

## Usage

- Use the "Cart" section to add items to your cart.

- Proceed to the "Checkout" section, enter a discount code, and click "Checkout" to place an order.

- Discount codes are generated and used automatically for every nth order.

- Access the "Admin" section to generate discount codes, and view purchase information.

## Code Structure

- `App.js`: Main application component.
- `Cart.js`: Component for managing the user's cart.
- `Checkout.js`: Component for handling the checkout process.
- `Admin.js`: Component for admin functionality and displaying purchase information.
