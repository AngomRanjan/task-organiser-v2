[![](https://img.shields.io/badge/Password%20Generator-Angom%20Chittaranjan-blue)](https://github.com/AngomRanjan)

# Password Generator

> This project is a dynamic and customizable password generator application built with React. It allows users to generate secure, random passwords according to their specified criteria. The application provides a user-friendly interface where users can adjust the password length and choose whether to include numbers and special characters. It also features a convenient copy-to-clipboard functionality to easily copy the generated password.

## Features

- **Dynamic Password Generation**: Generate passwords of varying lengths (8-32 characters) based on user preferences.
- **Customizable Options**: Toggle the inclusion of numbers and special characters to enhance password complexity.
- **Real-time Preview**: View the generated password in real-time as options are adjusted.
- **Copy to Clipboard**: Quickly copy the generated password with a single click for easy use.

## Learning Curve

This project provided an excellent opportunity to improve my understanding of several key concepts:

- **React Hooks**: Enhanced proficiency with React hooks, particularly in handling state and side effects across components.
- **Custom Hooks (`usePassword`)**: Developed a custom hook, `usePassword`, to encapsulate the logic for generating and managing password-related state, promoting code reuse and modularity.
- **Utility Functions (`generatePassword`)**: Created a utility function, `generatePassword`, to handle the logic of generating a password based on specific criteria, which was an exercise in writing clean, reusable code.
- **Context API**: Leveraged the Context API to share global state across the application, making it easier to manage complex state.
- **useMemo**: Used `useMemo` to optimize performance by memoizing the password generation, ensuring it only recalculates when the relevant inputs change.
- **Tailwind CSS**: Applied Tailwind CSS for efficient and responsive styling.
- **Code Organization**: Followed best practices for organizing code, including using the duck pattern, to improve maintainability and readability.

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
   git clone https://github.com/AngomRanjan/Password-Generator.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd Password-Generator
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

[source code](https://github.com/AngomRanjan/Password-Generator.git)

[Live Demo](https://angom-password-generator.netlify.app/)

## Author

👤 Angom Chittaranjan

- GitHub: [@AngomRanjan](https://github.com/AngomRanjan)
- Twitter: [@RanjanAngom](https://twitter.com/RanjanAngom)
- LinkedIn: [angom-chittaranjan](https://linkedin.com/in/angom-chittaranjan)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/AngomRanjan/Password-Generator/issues).

## Show your support

Give a [⭐️](https://github.com/AngomRanjan/Password-Generator/stargazers) if you like this project!

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
