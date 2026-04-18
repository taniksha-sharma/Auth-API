# Auth API (Supabase + Express)

## Overview

This project is a backend authentication API built using Node.js and Express, integrated with Supabase for user authentication and session management.

It demonstrates how a secure authentication system works in a real-world application using token-based authorization.

---

## What This Project Does

- Authenticates users using email and password
- Generates secure access tokens using Supabase
- Protects private routes using custom middleware
- Ensures only authenticated users can access restricted endpoints

---

## How It Works

1. A user logs in using email and password.
2. Supabase verifies the credentials and returns an access token.
3. This token is sent in request headers for protected routes.
4. Middleware validates the token before granting access.

---

## Key Features

- Login with Supabase Authentication  
- Token-based Authorization  
- Protected Routes using Middleware  
- Clean and Modular Backend Structure  

---

## Tech Stack

- Node.js  
- Express.js  
- Supabase  
- JavaScript  

---

## Author

Taniksha Sharma
