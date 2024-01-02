
## HR Management App Documentation

### Table Of Contents
1. [Introduction](#introduction)
2. [Features](#features)
   - [Employee Management](#employee-management)
   - [Data Filtering & Sorting](#data-filtering--sorting)
   - [Theme Customization](#theme-customization)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Configuration](#configuration)
   - [Folder Structure](#folder-structure)
   - [Firebase Configuration with Environment Variables](#firebase-configuration-with-environment-variables)
6. [Dependencies](#dependencies)
7. [Deployment](#deployment)
   - [Netlify](#netlify)
   - [Vercel](#vercel)
   - [GitHub Pages](#github-pages)
8. [Contact Information](#contact-information)

---

### 1. Introduction <a name="introduction"></a>

![Device Mockup](https://firebasestorage.googleapis.com/v0/b/hrm-app-6cb10.appspot.com/o/device%20mockup.png?alt=media&token=5fe53fd5-446a-4136-b0e0-e0d3da3d93f0)

The HR Management App is a robust ReactJS application with TypeScript designed for HR professionals to efficiently manage employee data. The app includes features such as employee addition, updating, deletion, and comprehensive listing. It leverages Firebase’s Realtime Database for data storage and retrieval, ensuring reliable data management.

### 2. Features <a name="features"></a>

#### 2.1 Employee Management <a name="employee-management"></a>

- **Add Employee:** Easily add new employee details, including full name, date of birth, date of join, email, mobile, profile image, work location, department, role, and skills.
- **Update Employee:** Modify existing employee information seamlessly.
- **Delete Employee:** Remove outdated or irrelevant employee records from the database.
- **Listing Employees:** View a comprehensive list of all employees with essential details.
- **Upload Image:** Associate employee images with their profiles for easy identification.
- **Pagination:** Navigate through large sets of employee data with user-friendly pagination controls.

#### 2.2 Data Filtering & Sorting

- **Filter by Department & Role:** Quickly filter employees based on their department & designated role.
- **Filter by Name:** Search for employees by their full name.
- **Filter by Skills:** Effortlessly find employees with specific skills or combinations of skills.
- **Sorting:** Sort the list based on name, email, and joined date.

#### 2.3 Theme Customization

- **Dark/Light Theme Toggle:** Enjoy a personalized user experience with the ability to switch between dark and light themes seamlessly.

### 3. Installation <a name="installation"></a>

Follow these steps to install and set up the HR Management App:

```bash
# Clone the repository
git clone git@github.com:nijin-26/hrm.git

# Navigate to the project directory
cd hrm

# Install dependencies
npm install
```

### 4. Usage <a name="usage"></a>

To run the HR Management App locally, use the following command:

```bash
npm start
```

Access the app in your browser at http://localhost:3000.

### 5. Configuration <a name="configuration"></a>

#### 5.1 Folder Structure <a name="folder-structure"></a>

```plaintext
/src
  /assets       # Images
  /components
    /common      # Reusable components
    /Employee    # Employee-specific components
    /Layout      # App layout component
  /core
    /api         # API functions
    /firebase    # Firebase configuration and image upload
    /hooks       # Custom hooks, e.g., useSkills
    /interfaces  # TypeScript interfaces
    /routing     # App routing management
    /store       # Redux store and reducers
    /styles      # Global styles
    /theme       # Theme context
    /utils       # Utility functions
  /pages
    /EmployeeForm     # Employee form for addition or editing
    /EmployeeListing  # List and filter employees
    /EmployeeView     # Detailed view of an employee
  - App.tsx
  - index.tsx
```

#### 5.2 Firebase Configuration with Environment Variables <a name="firebase-configuration-with-environment-variables"></a>

Create a Firebase project and obtain the necessary API keys. Replace the placeholder values in the project’s configuration file (`src/core/firebase/config.ts`) with your Firebase credentials or create a `.env` file in the root of the project with the following variables:

```env
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

### 6. Dependencies <a name="dependencies"></a>

Ensure you have the following dependencies installed:

- Node.js 20.x.x
- npm (Node Package Manager) 10.x.x
- Axios: Facilitates HTTP requests for seamless communication with the Firebase Realtime Database REST API.
- Firebase: Connects to Firebase’s storage for image storage.
- Redux: Global state management.
- Formik and yup: Streamlines form creation and validation.
- React-icons: Provides a variety of icons to enhance the user interface.
- React-toastify: Enables easy implementation of notification messages.
- SASS and Styled-components: Enhances styling capabilities for a visually appealing interface.
- Styled components are used for all the reusable components and SCSS is used for page components.
- TypeScript: Ensures strong typing and enhanced code quality.

### 7. Deployment <a name="deployment"></a>

#### 7.1 Netlify <a name="netlify"></a>

- **Deployment Method:** Netlify CLI and Manual Deployment
- **Process:** Deployed using Netlify CLI commands and manually configured environment variables on the Netlify platform.
- **URL:** https://hrm-app-react.netlify.app/

#### 7.2 Vercel <a name="vercel"></a>

- **Deployment Method:** GitHub Integration
- **Process:** Deployed automatically upon connecting the GitHub repository to Vercel, with environment variables configured within the Vercel dashboard. Whenever an update is pushed to the “develop” branch it gets redeployed.
- **URL:** https://hrm-app-2.vercel.app/

#### 7.3 GitHub Pages <a name="github-pages"></a>

- **Deployment Method:** gh-pages Dev Dependency
- **Process:** Utilizes the gh-pages dev dependency to build and push the contents of the build folder to the gh-pages branch in the GitHub repository. This triggers an automatic update of the live view.
- **URL:** https://nijin-26.github.io/hrm/

### 8. Contact Information <a name="contact-information"></a>

For any inquiries or assistance, please contact:

- **Name:** Nijin
- **Email:** nijin@qburst.com
- **GitHub:** [nijin-26](https://github.com/nijin-26)
