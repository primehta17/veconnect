# veconnect
ve-connect-project

API Endpoints:
 Users:
 POST /users: Register a new user (username, password, email).
 GET /users/{id}: Get user details.
 PUT /users/{id}: Update user details.
 DELETE /users/{id}: Delete a user.
 Products:
 GET /products: List all products with pagination.
 POST /products: Create a new product (name, description,
price, stock).
 GET /products/{id}: Get product details.
 PUT /products/{id}: Update product details.
 DELETE /products/{id}: Delete a product.
 Orders:

 POST /orders: Create a new order (user ID, product IDs,
quantities).
 GET /orders/{id}: Get order details.
 GET /users/{id}/orders: List all orders for a user.
