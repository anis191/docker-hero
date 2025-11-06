# DockerHero

DockerHero is a simple interactive React application that I built while learning Docker. The project helped me understand Docker concepts, commands, and workflows in a practical way. It is designed to teach Docker step by step and includes a Docker tutorial, basic commands, documentation references, and a language toggle (English and Bangla). The project is fully responsive with a modern UI and tracks progress for each tutorial step.

---

## Live Demo

Check out the live version here: [DockerHero Live](https://docker-hero.vercel.app/)

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
* **Docker** (for containerization and deployment)

---

## Getting Started (Local Development)

If you want to run the project locally (without Docker):

```bash
git clone https://github.com/anis191/docker-hero.git
cd docker-hero
npm install
npm run dev
```

Then open your browser at [http://localhost:5173](http://localhost:5173)

---

## Run with Docker (No Setup Needed)

You can directly pull and run the pre-built Docker image from Docker Hub.
No need to clone or build the project manually!
>⚠️ **Note:** You must have Docker installed and running on your system before executing the following commands.

### Pull the image

```bash
docker pull anisulalam/dockerhero:02
```

### Run the container

```bash
docker run -d -p 5173:5173 anisulalam/dockerhero:02
```

### Open in browser

Visit [http://localhost:5173](http://localhost:5173)

That’s it! 🎉 Your DockerHero app is now running inside a Docker container.

---

## Available Docker Images

| Repository            | Tag | Image ID     | Size   |
| --------------------- | --- | ------------ | ------ |
| anisulalam/dockerhero | 02  | d854381bd610 | 1.94GB |
| anisulalam/dockerhero | 01  | de323af744e8 | 1.94GB |

You can find them here: 👉 [DockerHub – anisulalam/dockerhero](https://hub.docker.com/r/anisulalam/dockerhero/tags)

---

## Future Improvements

* Dark mode support
* Add interactive quizzes after each Docker tutorial step
* Multi-language support beyond English and Bangla
* Export progress or download tutorials

---

## Author

**Anisul Alam**
[GitHub](https://github.com/anis191) | [LinkedIn](https://www.linkedin.com/in/anisul-alam-a330042a9/)

---

**DockerHero** – *Learn Docker, step by step, in a fun and interactive way!*
