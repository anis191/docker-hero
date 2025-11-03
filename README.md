# DockerHero

DockerHero is an simple interactive React application that I built while learning Docker. The project helped me understand Docker concepts, commands, and workflows in a practical way. It is designed to learn Docker step by step and includes a Docker tutorial, basic commands, documentation references, and a language toggle (English and Bangla). The project is fully responsive with a modern UI and tracks progress for each tutorial step.

---

## Features

* **Step-by-step Docker tutorial** with English and Bangla support
* **Progress tracking** for each tutorial step
* **Responsive design** for desktop and mobile
* **Beautiful icons** using React Icons
* **Light theme** with smooth gradient headings
* **Navigation bar** with Home, Commands, Tutorial, Documentation, and About sections

---

## Technologies Used

* **React** (with hooks and functional components)
* **Tailwind CSS** (for modern styling without configuration)
* **React Icons** (for professional and relevant icons)
* **Vite** (for fast project setup and development)

---

## Project Structure

```
DockerHero/
├─ public/
│  └─ docker.svg       # Docker favicon
├─ src/
│  ├─ components/      # React components like Navbar, MainContent, etc.
│  ├─ getLocalizedSteps.js  # Tutorial steps in English and Bangla
│  ├─ main.jsx         # Entry point
│  └─ App.jsx          # Main App component
├─ index.html          # HTML entry file with Docker favicon
├─ package.json
└─ README.md
```

---

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/DockerHero.git
cd DockerHero
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser at [http://localhost:5173](http://localhost:5173)

---

## Future Improvements

* Dark mode support
* Add interactive quizzes after each Docker tutorial step
* Multi-language support beyond English and Bangla
* Export progress or download tutorials

---

## Author

**Anisul Alam** – [GitHub](https://github.com/anis191) | [LinkedIn](https://www.linkedin.com/in/anisul-alam-a330042a9/)

---

**DockerHero** – Learn Docker, step by step, in a fun and interactive way!
