# Portfolio Website

This is a personal portfolio website built using **React**, **Vite**, and **Styled Components** to showcase my projects, skills, and experience. The website is designed to be responsive, aesthetically pleasing, and fully functional.

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Custom Components](#custom-components)
- [Deployment](#deployment)
- [License](#license)

## About the Project
The portfolio showcases my personal and professional journey, including:
- **Hero Section**: A dynamic introduction with an animated profile picture.
- **About Section**: A brief introduction about myself.
- **Skills Section**: A list of technical skills displayed in small cards.
- **Projects Section**: Highlighting key projects with brief descriptions and links.
- **Experience Section**: Displaying my work experience in card format.
- **Contact Section**: A contact form along with links to my LinkedIn and GitHub profiles.

## Features
- Fully responsive design
- Smooth scrolling navigation
- Dynamic hero section with animation
- Interactive skill and project cards
- Contact form with social links
- GitHub contributions graph

## Tech Stack
- **React**
- **Vite**
- **Styled Components**
- **React Scroll**
- **React Icons**

## Getting Started

### Prerequisites
Make sure you have **Node.js** and **npm** (or **yarn**) installed.

```bash
# Check Node.js version
node -v

# Check npm version
npm -v
```

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project
To start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`.

## Project Structure
```
portfolio/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── pages/
│   ├── styles/
│   │   └── theme.ts
│   └── App.tsx
└── public/
```

## Available Scripts
- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build.

## Custom Components
### Header
The navigation bar with links to different sections of the portfolio.

### Hero
A hero section with an animated profile picture and introduction.

### Skills
A section displaying skills as cards with icons.

### Projects
A section showcasing key projects with links to their repositories.

### Contact
A contact form with links to my LinkedIn and GitHub profiles.

## Deployment
The website can be deployed using **GitHub Pages** or any static hosting provider.

### Steps to Deploy with GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```
2. Add the following to your `package.json`:
   ```json
   "homepage": "https://your-username.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run the deploy script:
   ```bash
   npm run deploy
   ```

## License
This project is licensed under the MIT License. Feel free to use and modify the code as per your requirements.


