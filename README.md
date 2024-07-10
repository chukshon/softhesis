Next.js User Management App

## Overview

The application includes user login functionality, profile update capabilities, and a dashboard page that displays user-specific information after login. This application is a user management system built with

- Next.js,
- TypeScript,
- React Hook Form, Zod for form handling and validation,
- Tailwind CSS for styling.
- React Context for Global State Management

## Component Structure

The application follows the Atomic Design methodology to structure the components. This approach helps create a scalable, modular and resuable component architecture. The component hierarchy is divided into Atoms, Molecules, and Organisms.

### Atoms

Atoms are the basic building blocks of the application. These are the smallest and most fundamental components.

- Button.tsx: A reusable button component.
- Input.tsx: A reusable input component.

### Molecules

Molecules are groups of atoms that work together to form a single functional unit. They are slightly more complex than atoms but still relatively simple.

- FormField.tsx: A form field component that combines a label and an input element. This component also displays validation errors.

### Organisms

Organisms are more complex components that combine molecules and atoms to form distinct sections of the application.

- LoginForm.tsx: A login form component that handles user login functionality with validation.
- ProfileForm.tsx: A profile update form component that allows users to update their profile information with validation.

### Global Context

- UserContext.tsx: A context provider that manages the global state for the user. It stores the user information and provides setUser to update this information.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/chukshon/softhesis.git
cd softhesis
```

Install dependencies::

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the application in your browser:

```bash
http://localhost:3000
```
