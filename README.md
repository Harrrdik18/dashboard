User Management Web Application

A simple web application that allows users to view, add, and edit user details using a mock backend API (JSONPlaceholder). Built with React, Tailwind CSS, and React Modal.
Table of Contents

    Installation
    Run the Application
    Features
    Challenges Faced
    Improvements
    Technologies Used

Installation

To run this application locally, follow these steps:
1. Clone the repository

git clone https://github.com/your-username/user-management-app.git
cd user-management-app

2. Install dependencies

Make sure you have Node.js installed. If not, download and install it from the official website.

Then, install the required dependencies by running:

npm install

Run the Application

After installing the dependencies, you can run the application in development mode.
1. Start the development server

npm start

2. Open the application in your browser

Navigate to http://localhost:3000 in your browser to view the application.
Features

    View Users: Displays a list of users with details such as ID, first name, last name, email, and department.
    Add User: Allows you to add a new user by filling in a form with details like first name, last name, email, and department.
    Edit User: Allows editing the details of an existing user.
    Responsive Design: The interface is responsive and works well on both desktop and mobile screens.
    Modal: Uses React Modal for adding and editing users.

Challenges Faced

    API Simulation: Since the application uses JSONPlaceholder (a mock API), the changes (adding, editing) don't persist. This required some workarounds, like simulating a successful API call without actual data persistence.

    State Management: Handling form state and modal visibility at the same time was tricky. Ensuring that the modal opened with the correct data for editing and that the form data was correctly passed and handled was challenging initially.

    Styling: Tailwind CSS allowed for easy customization, but getting the modal centered properly, along with ensuring it looked consistent across different screen sizes, required some trial and error with utility classes.

Improvements

If given more time, I would:

    Persistent Data: Replace the mock API (JSONPlaceholder) with a real backend or implement local storage to persist data between sessions.

    Error Handling: Improve error handling for API requests. For example, add retry mechanisms or more specific error messages to help the user understand what went wrong.

    User Feedback: Add success/error notifications or loading indicators for better user experience, particularly during API interactions.

    Unit and Integration Testing: Write tests to ensure that the application’s functionalities (e.g., adding, editing, and deleting users) work as expected. This could be done with tools like Jest and React Testing Library.

    Styling Enhancements: Although the application is functional, further polishing of the design could be done, especially the form fields and button styles, for a more modern and cohesive look.

Technologies Used

    React: For building the user interface.
    Tailwind CSS: For styling the application.
    React Modal: For displaying modals for adding and editing users.
    JSONPlaceholder: For simulating a backend API to fetch, add, and edit user data.