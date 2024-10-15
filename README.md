[![](https://img.shields.io/badge/Tasks%20Organiser%20V2-Angom%20Chittaranjan-blue)](https://github.com/AngomRanjan)

# Task Organiser v2

> This project is a React-based task management application designed to help users organize and track their daily tasks. It allows users to add, update, delete, and toggle task completion, with persistent storage through localStorage. The app offers a simple and intuitive interface, allowing for a seamless task organization experience..

## Features

- **Task Manager**: Add, update, delete, and toggle the completion status of tasks. Easily manage multiple tasks with real-time updates.
- **Task Persistence**: Tasks are saved in localStorage and are automatically loaded on app initialization, preserving state between sessions.
- **Task Completion**: Quickly mark tasks as completed or pending by toggling the status.
- **Clear Completed Tasks**: Option to remove all completed tasks with a single click to maintain an organized task list.

## Learning Curve

This project provided an excellent opportunity to improve my understanding of several key concepts:

- **React Hooks**: Developed a deeper understanding of useReducer for managing complex state and useEffect for handling side effects such as saving tasks to localStorage.
- **Custom Hooks (`useTasksContextValue`)**: Created a custom hook to encapsulate task management logic, promoting reusability and better code organization.
- **Context API**: Leveraged the Context API to share task-related state globally, simplifying state management across different components.
- **useMemo**: Used `useMemo` to optimize task list calculations (e.g., totals of completed and pending tasks) and improve performance by memoizing derived values.
- **Tailwind CSS**: Applied Tailwind CSS for efficient and responsive styling, focusing on clean design and modern UI practices.
- **Code Organization**: Adopted best practices for structuring React applications, focusing on modularity and separation of concerns, ensuring scalability and maintainability.

## Built With

- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **JavaScript**: The programming language used to build the core logic.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: You need to have Node.js installed. You can download it from [Node.js official website](https://nodejs.org/).
- **npm**: This project uses npm as the package manager.
- **Visual Studio Code (VS Code)**: It's recommended to use [VS Code](https://code.visualstudio.com/) as your code editor for a better development experience.

## Getting Started

To get a local copy up and running, follow these simple steps:

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github.com:AngomRanjan/task-organiser-v2.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd task-organiser-v2
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open the app in your browser:**
   The application should now be running at `http://localhost:5173/`.

## Live Demo

[source code](https://github.com/AngomRanjan/task-organiser-v2)

[Live Demo](#)

## Author

👤 Angom Chittaranjan

- GitHub: [@AngomRanjan](https://github.com/AngomRanjan)
- Twitter: [@RanjanAngom](https://twitter.com/RanjanAngom)
- LinkedIn: [angom-chittaranjan](https://linkedin.com/in/angom-chittaranjan)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/AngomRanjan/task-organiser-v2/issues).

## Show your support

Give a [⭐️](https://github.com/AngomRanjan/task-organiser-v2/stargazers) if you like this project!

## 👣 Track Me

<a href="https://twitter.com/RanjanAngom?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">
<img src="https://img.shields.io/badge/-@RanjanAngom-blue?style=flat&logo=twitter&logoColor=white">
</a>

<a class="github-button" href="https://github.com/AngomRanjan" aria-label="Follow @AngomRanjan on GitHub">
 <img src="https://img.shields.io/badge/-@AngomRanjan-green?style=flat&logo=github&logoColor=white">
</a>

## Acknowledgments

- My Family

## References

- [Vite doc](https://vitejs.dev)
- [React Doc](https://react.dev)

## 📝 License

This project is [MIT](LICENSE) licensed.
