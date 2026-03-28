# 🍔 Food Delivery Application

## 📌 Overview

This is a full-stack Food Delivery Web Application built using Angular and .NET Core.
It supports complete order lifecycle management including food browsing, cart handling, order placement, and real-time order tracking with a structured backend architecture and relational database design.

---

## 🛠 Tech Stack

### Frontend

* Angular (Standalone)
* TypeScript
* HTML, CSS

### Backend

* .NET Core Web API
* Entity Framework Core
  
## 🗄️ Database

The application uses **SQL Server** as the database to manage users, food items, and orders.

### 📊 Database Name

`OnlineFoodDeliveryDB`

---

### 🧱 Tables Overview

#### 1. Customers

Stores user details.

* CustomerId (PK)
* Name
* Email (Unique)
* Password
* Phone
* Address
* CreatedAt

---

#### 2. FoodItems

Stores available food items.

* FoodId (PK)
* Name
* Description
* Price
* ImageUrl
* IsAvailable
* CreatedAt

---

#### 3. Orders

Stores customer orders.

* OrderId (PK)
* CustomerId (FK → Customers)
* OrderDate
* TotalAmount
* OrderStatus

---

#### 4. OrderItems

Stores items within each order.

* OrderItemId (PK)
* OrderId (FK → Orders)
* FoodId (FK → FoodItems)
* Quantity
* Price

---

#### 5. Admins

Stores admin login details.

* AdminId (PK)
* Username
* Password

---

#### 6. TrackOrderStatus

Tracks order progress.

* TrackId (PK)
* OrderId (FK → Orders)
* Status
* StatusTime

---

### 🔗 Relationships

* One Customer → Many Orders
* One Order → Many OrderItems
* One FoodItem → Many OrderItems
* One Order → Many Tracking Updates

---

### ⚙️ Setup Instructions

1. Open SQL Server Management Studio (SSMS)
2. Create a new database:

   ```sql
   CREATE DATABASE OnlineFoodDeliveryDB;
   ```
3. Run the full SQL script provided in the project to:

   * Create tables
   * Add relationships
   * Insert sample data

---

### 📌 Notes

* Foreign keys ensure data integrity
* Sample data is included for testing
* Order tracking supports real-time status updates



## 🚀 Features

* User Registration & Login
* Browse Food Items
* Add to Cart
* Place Orders
* Order History

---

## 📁 Project Structure

Food-Delivery-App/
├── frontend/   # Angular Application
├── backend/    # .NET Core API

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/vaishnavik93/food-delivery-app.git
cd food-delivery-app
```

### 2️⃣ Run Backend

```bash
cd backend
dotnet run
```

Backend runs on: https://localhost:5000 (or your port)

### 3️⃣ Run Frontend

```bash
cd frontend
npm install
ng serve
```

Frontend runs on: http://localhost:4200

---
## 🔗 API Endpoints

### 🔐 Authentication

* POST `/api/Auth/login`
  → Authenticate user and return access response

---

### 👤 Customer

* POST `/api/Customer/register`
  → Register a new customer

* GET `/api/Customer`
  → Get all customers

---

### 🍔 Food Management

* GET `/api/Food`
  → Get all food items

* POST `/api/Food`
  → Add new food item (Admin)

* PUT `/api/Food/{id}`
  → Update food item

* DELETE `/api/Food/{id}`
  → Delete food item

---

### 📦 Orders

* POST `/api/Order`
  → Place a new order

* GET `/api/Order`
  → Get all orders

* GET `/api/Order/customer/{customerId}`
  → Get orders by customer

* PUT `/api/Order/{id}/status`
  → Update order status (Admin)

---

### 🚚 Order Tracking

* GET `/api/TrackOrder/{orderId}`
  → Get order tracking status


## 👨‍💻 Author
Vaishnavi Kesarwani
