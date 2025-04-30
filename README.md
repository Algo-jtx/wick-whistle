# The Wick & Whistle Pantry

A Curated Recipe Collection Platform
*Version 1.0 (April 2025)*

---

## About

*The Wick & Whistle Pantry* is a user-friendly recipe platform designed to help users discover, save, and share their favorite recipes.  It offers a personalized cooking experience with features like a favorites list, detailed recipe pages, and a member login system.

Built with ❤️ by *The Null Pointers* — Juanita, Anthony, Melvin, Ian, and Dennis.
> This project is the sole property of the team members listed above.

---

## Key Features

- 🍽️ **Recipe Cards:** Display recipes with essential information (name, image, brief description) and a "View Details" button.
- ⭐ **Favorites:**  Users can mark recipes as favorites for quick access.
- 🔐 **Member Login:** Secure login system allowing users to create accounts and manage their saved recipes and preferences. (Requires a backend implementation for full functionality.)
- 📝 **Detailed Recipe Pages:**  Comprehensive pages featuring ingredient lists and step-by-step cooking instructions.

---

## Demo

*Please note:  Due to the current reliance on a mock API, full interactive features like user login and data persistence might not be fully functional in the demo. The demo showcases the visual elements and the overall structure of the application.*

👉 [Explore The Wick & Whistle Pantry - Deployed Demo (Example Link)](#)  *(Replace with a live deployed link, e.g., Netlify, Vercel.  If you don't have one, remove this line or put "Coming Soon...")*

*Alternatively, you can run the project locally (see instructions below) to explore.*

*Example Screenshots:*

*   **Homepage Example:**

    ![Homepage Example](https://github.com/user-attachments/assets/9bd36377-a10f-4b67-b657-909df28fd246)  

    ![Recipe Details Example](https://github.com/user-attachments/assets/ca268f83-885b-4f13-b7e2-1b177f7e745f) 

---

## Setup / Installation

### Requirements

*   Linux, macOS, or WSL (Windows Subsystem for Linux)
*   A GitHub account (for version control and contribution)
*   A code editor such as Visual Studio Code (recommended) or any other code editor you prefer.
*   [Node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/) installed.  Verify installation by running `node -v` and `npm -v` in your terminal.

### Steps to Run Locally

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Dennishub001/wick-and-whistle-pantry.git
    ```

    *   If you prefer to clone via SSH, you can use the following, replacing the provided URL with the SSH URL from your GitHub repo (in the "Code" button)*

        ```bash
        git clone git@github.com:Dennishub001/wick-and-whistle-pantry.git
        ```

2.  **Navigate into the project folder:**

    ```bash
    cd wick-and-whistle-pantry  # Replace "your-repository-name" with the actual name if different
    ```

3.  **Open the project in your code editor:**

    *   **VS Code:** `code .`  (This opens the current directory in VS Code.  Ensure VS Code is correctly installed and accessible from your terminal).
    *   **Other editors:**  Use your editor's "Open Folder" or similar functionality to open the project directory.

4.  **Install dependencies:**

    ```bash
    npm install
    ```
    *This command reads the `package.json` file and installs all the necessary packages/libraries.*

5.  **Install react-router-dom (if not already included in dependencies):**

    ```bash
    npm install react-router-dom
    ```

6.  **Install SweetAlert2 (for helpful alerts and notifications):**

    ```bash
    npm install sweetalert2
    ```

7.  **Start the Mock API (JSON Server):**

    *   You'll need a `recipes-db.json` file in your project root (or a path you specify).  This file holds your recipe data (JSON format). Create this file or use an example provided in the repository.
    *   Run the following command in a *separate* terminal window to start the mock server.

        ```bash
        npx json-server --watch recipes-db.json --port 3001  #  Adjust the port if needed.
        ```
        *   `npx` executes the `json-server` command without a global installation, ensuring its local dependencies are used.
        *   `--watch recipes-db.json` tells JSON Server to serve data from your `recipes-db.json` file.
        *   `--port 3001` Specifies which port the server runs on.

        *Important:*  Keep this terminal window open while running the application; the mock server must be active to serve the recipe data.*

8.  **Run the React application:**

    ```bash
    npm start
    ```

    *   This command starts the development server. The application should automatically open in your web browser at `http://localhost:3000` (or the port configured in your `package.json`).

### How to Contribute

1.  **Fork the repository:**  On the GitHub repository page, click the "Fork" button to create your own copy of the project in your GitHub account.
2.  **Clone your fork:**
    ```bash
    git clone <YOUR_FORK_URL>  # Replace <YOUR_FORK_URL> with the URL of your forked repository.  Usually this will be git@github.com:<YOUR_GITHUB_USERNAME>/wick-and-whistle-pantry.git
    cd wick-and-whistle-pantry
    ```
3.  **Create a new branch:**

    ```bash
    git checkout -b feature/your-feature-name  # Replace "your-feature-name" with a descriptive name for your branch.
    ```

4.  **Make your changes:**  Add, modify, or delete files as needed.
5.  **Add and commit your changes:**

    ```bash
    git add . # Add all modified files.  Consider specifying files individually for better control.
    git commit -m "feat:  Implemented [brief description of your changes]"  #  Use a clear and concise commit message.  Prefix with "feat:", "fix:", "docs:", etc.  (See guidelines for conventional commits)
    ```
6.  **Push your branch to your fork on GitHub:**

    ```bash
    git push origin feature/your-feature-name
    ```

7.  **Open a Pull Request:**  Go to your forked repository on GitHub. You should see a prompt to "Compare & pull request." Click this and follow the instructions to create a pull request to the *main* branch of the *original* repository (Dennishub001/wick-and-whistle-pantry).  Describe your changes clearly in the pull request.
8.  **Respond to feedback:** Be prepared to address any comments or requests from reviewers.

### Technologies Used

*   [React.js](https://react.dev/) — Frontend development (UI, components, state management)
*   JavaScript (ES6+) — Logic and interactivity
*   HTML/CSS — Structure and styling
*   [JSON Server](https://www.npmjs.com/package/json-server) — Mock API backend for serving recipe data (for development and testing)
*   [React Router](https://reactrouter.com/en/main) — Page navigation (routing)
*   [VS Code](https://code.visualstudio.com/) — Code editor (or your preferred editor)
*   npm — Package manager (for installing dependencies and running scripts)
*   [SweetAlert2](https://sweetalert2.github.io/) -  For nice-looking alert messages

---
