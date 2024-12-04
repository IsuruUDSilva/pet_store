# Shopping Cart Application

This is a **Shopping Cart Application** built using React, Redux, Vite, and TailwindCSS. It allows users to sign up, log in, manage their shopping cart, and proceed to checkout.

---

## **Features**

1. **Authentication**:
   - Initial login details:
     - Email: `test@email.com`
     - Password: `Paswrd@1`
   - Users can sign up with new credentials.
2. **Shopping Cart**:
   - Add items to the cart.
   - Increase or decrease item quantities.
   - Remove items from the cart.
   - Clear the entire cart.
3. **Checkout**:
   - Includes a form to collect user details (name, email, address, phone).
   - Calculates the total price of items in the cart.
4. **Responsive Design**:
   - Styled with TailwindCSS for a clean and mobile-friendly interface.
5. **UI Components**:
   - Integrated with [Aceternity UI](https://ui.aceternity.com/) for modern and consistent UI components.
6. **State Management**:
   - Redux is used to manage the global state for authentication and cart functionality.

---

## **Tech Stack**

- **Frontend**: React + Vite
- **State Management**: Redux Toolkit
- **Styling**: TailwindCSS
- **UI Components**: Aceternity UI

---

## **Getting Started**

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/shopping-cart.git
   cd shopping-cart
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to:
   ```bash
   http://localhost:5173
   ```

---

### **Initial Login Details**

- **Email**: `test@email.com`
- **Password**: `Paswrd@1`

You can also sign up with a new user.

---

### **Available Scripts**

- `npm run dev` : Starts the development server.
- `npm run build` : Builds the app for production.
- `npm run preview` : Previews the production build.

---

### **Folder Structure**

```bash
src/
├── assets/          # Static assets like images and icons
├── components/      # Reusable React components
├── data/            # All data for pages and components
├── pages/           # Page-level components
├── store/           # Redux store and slices
├── styles/          # TailwindCSS configurations and global styles
├── App.tsx          # Root component
└── main.tsx         # Application entry point
```

---

### **Usage**

1. Log in using the provided credentials (`test@email.com` / `Paswrd@1`) or sign up with new credentials.
2. Add items to your cart from the product list.
3. **Manage your cart**:
   - Increase or decrease item quantities.
   - Remove items or clear the entire cart.
4. **Proceed to checkout**:
   - Fill out the form with your name, email, address, and phone.
   - Review the total price and submit the form.

---

### **UI Components**

This app uses [Aceternity UI](https://ui.aceternity.com/) for consistent and modern UI components.

---

### **State Management**

- The app uses Redux Toolkit to manage:
  - **Authentication State**: Tracks logged-in users and their credentials.
  - **Cart State**: Manages items in the cart, including adding, updating, and removing items.

---

### **Contributing**

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/new-feature
```

3. Commit your changes:

```bash
git commit -m "Add new feature"
```

4. Push to the branch:

```bash
git push origin feature/new-feature
```

5. Create a pull request.

---

**Happy Coding! 🎉**
