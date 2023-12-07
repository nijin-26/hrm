# HR Management App Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Usage](#usage)
6. [Dependencies](#dependencies)
7. [Deployment](#deployment)
8. [Contact Information](#contact-information)

---

## 1. Introduction <a name="introduction"></a>

![Device Mockup](https://firebasestorage.googleapis.com/v0/b/hrm-app-6cb10.appspot.com/o/device%20mockup.png?alt=media&token=5fe53fd5-446a-4136-b0e0-e0d3da3d93f0)

The HR Management App is a robust ReactJS application with Typescript designed for HR professionals to efficiently manage employee data. The app includes features such as employee addition, updating, deletion, and comprehensive listing. It leverages Firebase's Realtime Database for data storage and retrieval, ensuring  reliable data management.

## 2. Features <a name="features"></a>

### 2.1 Employee Management

- **Add Employee:** Easily add new employee details, including full name, date of birth, date of join, email, mobile, profile image, work location, department, role, and skills.

- **Update Employee:** Modify existing employee information seamlessly.
- **Delete Employee:** Remove outdated or irrelevant employee records from the database.
- **Listing Employees:** View a comprehensive list of all employees with essential details.
- **Upload Image:** Associate employee images with their profiles for easy identification.
- **Pagination:** Navigate through large sets of employee data with user-friendly pagination controls.

### 2.2 Data Filtering & Sorting

- **Filter by Department & Role:** Quickly filter employees based on their department & designated role.
- **Filter by Name:** Search for employees by their full name.
- **Filter by Skills:** Effortlessly find employees with specific skills or combinations of skills.
- **Sorting:** Sort the list based on name, email and joined date.

### 2.4 Global State Management

- **Redux Integration:** Utilizes Redux for efficient global state management.

### 2.5 Theme Customization

-   **Dark/Light Theme Toggle:** Enjoy a personalized user experience with the ability to switch between dark and light themes seamlessly.

### 2.6 External Packages 

- **axios:** Facilitates HTTP requests for seamless communication with the Firebase Realtime Database REST API.
- **firebase:** Connects to Firebase's storage for image storage.
- **formik and yup:** Streamlines form creation and validation.
- **react-icons:** Provides a variety of icons to enhance the user interface.
- **react-toastify:** Enables easy implementation of notification messages.
- **sass and styled-components:** Enhances styling capabilities for a visually appealing interface.
	- Styled component is used for all the reusable components and SCSS is used for page components.

- **Typescript:** Ensures strong typing and enhanced code quality.

## 3. Installation <a name="installation"></a>

Follow these steps to install and set up the HR Management App:

```bash
# Clone the repository
git clone git@github.com:nijin-26/hrm.git

# Navigate to the project directory
cd hrm

# Install dependencies
npm install
```

## 4. Configuration <a name="configuration"></a>

### 4.1 Firebase Configuration with Environment Variables
1. Create a Firebase project and obtain the necessary API keys.
2. Replace the placeholder values in the project's configuration file (`src/firebase/config.js`) with your Firebase credentials or 
3. Create a `.env` file in the root of the project with following variables.
```
	REACT_APP_FIREBASE_API_KEY=
	REACT_APP_FIREBASE_AUTH_DOMAIN=
	REACT_APP_FIREBASE_DATABASE_URL=
	REACT_APP_FIREBASE_PROJECT_ID=
	REACT_APP_FIREBASE_STORAGE_BUCKET=
	REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
	REACT_APP_FIREBASE_APP_ID=
```

## 5. Usage <a name="usage"></a>

To run the HR Management App locally, use the following command:

```bash
npm start
```

Access the app in your browser at [http://localhost:3000](http://localhost:3000).

## 6. Dependencies <a name="dependencies"></a>

Ensure you have the following dependencies installed:

- Node.js
- npm (Node Package Manager)

## 7. Deployment <a name="deployment"></a>

The HR Management App is deployed on the following platforms:

### 7.1 Netlify

- **URL:** https://hrm-app-react.netlify.app/

### 7.2 Vercel

- **URL:** https://hrm-app-2.vercel.app/

### 7.3 GitHub Pages

- **URL:** https://nijin-26.github.io/hrm/

## 8. Contact Information <a name="contact-information"></a>

For any inquiries or assistance, please contact:

- **Name:** Nijin
- **Email:** nijin@qburst.com
- **GitHub:** [nijin-26](https://github.com/nijin-26)

---
