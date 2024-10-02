# Assignment 5 - Donate Bangladesh

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Design Structure](#design-structure)
- [Functionalities](#functionalities)
- [Blog Page](#blog-page)
- [Challenges Implemented](#challenges-implemented)
- [Technologies Used](#technologies-used)
- [How to Run the Project](#how-to-run-the-project)
- [Credits](#credits)

## Overview
This project is an implementation of **Assignment 5 - Donate Bangladesh**. The web application allows users to donate to various causes, view their transaction history, and check their account balance. The project is built with basic HTML, CSS, and JavaScript without using any external JavaScript libraries or frameworks.

## Features
- **Navbar**: A visually appealing sticky navbar with a logo, blog button, account balance with an icon, and navigation options for donations and history.
- **Donation Cards**: Displays three donation cards where users can input their donation amount and submit it.
- **History Section**: Initially hidden but populated with transaction details once donations are made.
- **Input Validation**: Prevents invalid transactions such as donating more than the available balance or submitting empty fields.
- **Responsive Design**: The web application adjusts to different screen sizes for better user experience.

## Design Structure
### Navbar
- **Logo**: Positioned at the center.
- **Blog Button**: On the left side.
- **Account Balance**: Displayed on the right with a coin icon.
- **Donation & History Buttons**: Center-aligned as per the design specification.

### Donation Cards
- Three cards containing:
  - Image (on the left).
  - Donation title.
  - Donation info.
  - Current donation amount.
  - Input field for entering donation.
  - Button for submitting the donation.

### History Section
- Initially hidden.
- Becomes visible when the user clicks on the "History" button.
- Displays a transaction notification containing:
  - Date and time of the transaction.
  - Donation amount.
  - Donation name.

## Functionalities
- **Donation & History Buttons**:
  - Toggling functionality between showing the donation data and history.
  - When "History" is clicked, the donation section hides and history displays, and vice versa.
  
- **Donation Functionality**:
  - When the user clicks "Donate Now", the entered donation amount is deducted from the account balance and added to the donation card.
  - If the donation is successful, a transaction notification is added to the history section.

- **Input Validation**:
  - Alerts if:
    - The donation amount is greater than the available balance.
    - The input field contains invalid or empty data.
  
- **Static Modal**:
  - Displayed for successful donations.

- **Reusable Functions**:
  - At least two functions are reused across the project to handle repetitive tasks.

## Blog Page
A separate `blog.html` file answers the following questions:
1. **What is the Document Object Model (DOM)?**
2. **How do you select an element from the DOM?**
3. **What is event delegation in the context of the DOM, and why is it useful?**
4. **How do you manipulate an element's attributes and styles using the DOM?**

## Challenges Implemented
- **Sticky Navbar**: The navbar stays at the top of the page when scrolling.
- **Toggle Active Status**: The "Donation" and "History" buttons change color to indicate active status.
- **Static Modal**: A static modal is shown on successful donation instead of an alert.
- **Responsive Design**: The layout is responsive and adapts to different screen sizes.

## Technologies Used
- **HTML**: Structure of the webpage.
- **CSS**: For styling and responsive design.
- **JavaScript**: For functionality, such as form validation, donations, and history toggling.

## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/assignment-5-donate-bangladesh.git](https://github.com/Shams-Saniat/Assignment-5.git
