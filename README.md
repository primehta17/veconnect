# veconnect
ve-connect-project


steps 
git clone https://github.com/primehta17/veconnect.git


First change directory veconnect/server/backend
->npm start
->change mogodb.connect username and password in server.js on line no. 10
->it will start at http://localhost:2000/


Third change directory to veconnect/client 
->npm start
->click register now it will go link http://localhost:3001/
->it will start at http://localhost:3000/


Third change directory to veconnect/server/frontend
->npm start
->it will start at http://localhost:3001/


You can check the video  as well  in [Screen Recording 2024-10-14  folder](https://drive.google.com/file/d/1FwvaTW39wWSGfPF1MHz3gB2xKJmzmGn3/view?usp=sharing)
API Endpoints:
Users:

POST /users: Register a new user (username, password, email).
GET /users/{id}: Get user details.
PUT /users/{id}: Update user details.
DELETE /users/{id}: Delete a user.

Products:

GET /products: List all products with pagination.
POST /products: Create a new product (name, description,price, stock).
GET /products/{id}: Get product details.
PUT /products/{id}: Update product details.
DELETE /products/{id}: Delete a product.


Orders:

POST /orders: Create a new order (user ID, product IDs,
quantities).
GET /orders/{id}: Get order details.
GET /users/{id}/orders: List all orders for a user.
