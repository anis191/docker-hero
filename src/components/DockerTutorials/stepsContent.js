export const stepsContent = {
  en: [
    {
      id: 'intro',
      title: 'Introduction & Prerequisites',
      summary: 'What Docker is, why use it, and prerequisites to follow this guide',
      details:
        `Docker is a platform for packaging, distributing and running applications inside containers. ` +
        `Containers bundle your app with its runtime and dependencies so it runs the same on any host.\n\n` +
        `Why use Docker:\n` +
        `• Reproducible environments — eliminates "works on my machine" problems.\n` +
        `• Lightweight isolation — faster start times than VMs and smaller resource footprint.\n` +
        `• Portable deployment — images can be pushed to registries and pulled anywhere.\n\n` +
        `Prerequisites:\n` +
        `1) Install Docker Desktop (Windows/macOS) or Docker Engine (Linux).\n` +
        `2) Basic familiarity with a shell (bash/PowerShell/Command Prompt).\n` +
        `3) A simple project directory and a Dockerfile (we include examples later).\n\n` +
        `This guide walks you from basic verification and CLI usage to image builds, runtime debugging, storage, networking, Compose, optimization techniques and pushing images to registries.`,
      code: null
    },
    {
      id: 'verify-install',
      title: 'Verify Installation',
      summary: "Confirm Docker is available on your machine",
      details:
        `Run the Docker CLI version command and a smoke-test container to ensure both daemon and client work.\n\n` +
        `Commands:\n` +
        `• docker --version — shows the client version.\n` +
        `• docker info — gives daemon details (useful to verify rootless mode, storage driver, etc.).\n` +
        `• docker run hello-world — a lightweight way to verify image pull and container runtime.\n\n` +
        `Troubleshooting tips:\n` +
        `• On Windows/macOS, ensure Docker Desktop is started and WSL2 integration enabled (if using WSL2).\n` +
        `• On Linux, ensure the docker daemon (dockerd) is running and your user is in the docker group or use sudo.`,
      code: { cmd: 'docker --version', note: "Example output: Docker version 24.0.0, build ..." }
    },
    {
      id: 'basic-cli',
      title: 'Docker CLI Basics',
      summary: 'Most-used commands to inspect Docker and authenticate',
      details:
        `The Docker CLI exposes commands for managing images, containers, networks and volumes. Learn a few core commands that you'll use daily.\n\n` +
        `Common commands:\n` +
        `• docker ps / docker ps -a — list running / all containers.\n` +
        `• docker images — list available images on the host.\n` +
        `• docker pull / docker push — retrieve or publish images to registries.\n` +
        `• docker login — authenticate to a registry (use CI secrets for automation).\n` +
        `• docker help and docker <command> --help — get usage and flags.\n\n` +
        `Tip: practice reading help text for flags like -v (volume), -p (port) and --rm so you know how containers are started.`,
      code: { examples: ['docker help', 'docker login', 'docker pull nginx:latest'] }
    },
    {
      id: 'build-image',
      title: 'Build an Image (from Dockerfile)',
      summary: 'Create reproducible images using Dockerfile and build flags',
      details:
        `A Dockerfile declares how to assemble an image layer-by-layer. Each instruction creates a layer which is cached for faster rebuilds.\n\n` +
        `Best practices when authoring Dockerfiles:\n` +
        `• Start from a small, maintained base image (alpine, debian-slim, or distroless) when appropriate.\n` +
        `• Pin dependency versions in package manifests to avoid unexpected changes.\n` +
        `• Leverage multi-stage builds to compile/build artifacts in a builder stage and copy only the final artifacts into the runtime image.\n` +
        `• Minimize number of RUN steps by combining commands to reduce image layers and improve caching behavior.\n\n` +
        `Build tips:\n` +
        `• Use docker build -t name:tag . to tag images.\n` +
        `• Use --build-arg for dynamic build-time values and --no-cache when you need a fresh rebuild.\n` +
        `• Inspect layers with docker history <image> to understand size contributors.`,
      code: { examples: ['docker build -t my-vite-app .', 'docker build -t docker-test-app:1.0 .'] }
    },
    {
      id: 'run-containers',
      title: 'Run Containers (interactive & detached)',
      summary: 'How to run containers for development, testing and production',
      details:
        `Running containers has many modes depending on purpose:\n\n` +
        `• Interactive: docker run -it <image> /bin/sh — useful for debugging and exploring the filesystem.\n` +
        `• Detached: docker run -d --name app -p 8080:80 <image> — runs in background for services.\n` +
        `• Short-lived / one-off: docker run --rm <image> command — removes container automatically after exit.\n\n` +
        `Other useful flags:\n` +
        `• --name to assign readable names for easier management.\n` +
        `• -p host:container to publish ports and enable access from host.\n` +
        `• -e or --env-file to pass environment variables securely (avoid committing secrets to Dockerfile).\n` +
        `• -v for bind mounts or named volumes (useful for live code mounting in development).`,
      code: {
        examples: [
          'docker run --name myapp -d -p 5173:5173 docker-test-app:1.0  # run in background',
          'docker run -it --rm docker-test-app:1.0 /bin/sh               # interactive debug session'
        ]
      }
    },
    {
      id: 'manage',
      title: 'Manage Containers & Images',
      summary: 'List running containers, stop them, and remove unused artifacts',
      details:
        `Everyday container management covers listing, stopping, removing and cleaning up images/containers.\n\n` +
        `Workflow:\n` +
        `1) docker ps — see running containers, names and exposed ports.\n` +
        `2) docker stop <name> — stop a running container gracefully.\n` +
        `3) docker rm <name> — remove a stopped container.\n\n` +
        `Image management:\n` +
        `• docker images / docker image ls — list images.\n` +
        `• docker rmi <image> — remove images you no longer need (use -f to force).\n\n` +
        `Tip: use descriptive names and tags to avoid accidentally deleting images you still need.`,
      code: { examples: ['docker ps', 'docker ps -a', 'docker stop myapp', 'docker rm myapp', 'docker rmi docker-test-app:1.0'] }
    },
    {
      id: 'inspect-debug',
      title: 'Inspect & Debug',
      summary: 'How to look into containers and diagnose issues',
      details:
        `When things fail, the CLI provides tools to inspect container state and logs.\n\n` +
        `Key commands:\n` +
        `• docker logs <container> — show stdout/stderr from the container; add -f to follow logs.\n` +
        `• docker exec -it <container> /bin/sh — open a shell in a running container for live debugging.\n` +
        `• docker inspect <container|image> — show detailed JSON metadata (environment, mounts, network info).\n` +
        `• docker stats — live resource usage (CPU, memory) for containers.\n\n` +
        `Debugging tips:\n` +
        `• Reproduce the problem with an interactive container and check file permissions, environment variables and mounted paths.\n` +
        `• Use lightweight debug images (busybox, alpine) to reduce overhead while troubleshooting.`,
      code: { examples: ['docker logs myapp', 'docker logs -f myapp', 'docker exec -it myapp /bin/sh', 'docker inspect myapp'] }
    },
    {
      id: 'storage',
      title: 'Storage: Volumes vs Bind Mounts',
      summary: 'When to use Docker volumes or host bind mounts',
      details:
        `Docker supports two main persistence mechanisms: volumes and bind mounts.\n\n` +
        `Volumes:\n` +
        `• Created and managed by Docker (docker volume create).\n` +
        `• Good for database storage and data that must persist between container restarts and across hosts (when exported).\n` +
        `• Simpler to manage in production and less tied to host filesystem layout.\n\n` +
        `Bind mounts:\n` +
        `• Map a host directory/file into the container (e.g., -v /host/path:/container/path).\n` +
        `• Ideal for development when you want live-editing of code from the host.\n` +
        `• Be careful with OS-specific path formats and file permission mismatches (Windows path escaping etc.).\n\n` +
        `Examples and tips:\n` +
        `• Use named volumes for DB data.\n` +
        `• Use bind mounts for source code during development to avoid rebuilding images on every change.`,
      code: {
        examples: [
          'docker volume create myvolume',
          'docker run -it --rm -v myvolume:/app anisulalam/uimanager:1.0',
          'docker run -v "F:\\\\docker-learning\\\\docker-test-app:/myapp" anisulalam/docker-test-app:2.0'
        ]
      }
    },
    {
      id: 'networking',
      title: 'Networking: Default vs User Networks',
      summary: 'How containers communicate and when to create custom networks',
      details:
        `Docker networking provides isolation and service discovery depending on the network type.\n\n` +
        `Default bridge network:\n` +
        `• Allows containers to communicate via IP but not by container name.\n` +
        `• Good for simple, single-host scenarios with explicit port mapping.\n\n` +
        `User-defined bridge networks:\n` +
        `• Created with docker network create <name>.\n` +
        `• Containers on the same user-defined bridge can resolve each other by name and have better isolation and predictable subnetting.\n\n` +
        `Other networking modes:\n` +
        `• host network (Linux) — shares host network namespace (useful for specific performance cases).\n` +
        `• overlay networks — used by Swarm/Kubernetes for multi-host service communication.\n\n` +
        `Tip: prefer a user-defined bridge for multi-container apps to take advantage of automatic DNS-based service discovery.`,
      code: { examples: ['docker network create mynet', 'docker run --network mynet --name db -d postgres:latest', 'docker network inspect mynet'] }
    },
    {
      id: 'compose',
      title: 'Docker Compose: Multi-container apps',
      summary: 'Define multi-container applications with docker-compose.yml',
      details:
        `Docker Compose lets you declare multiple services, volumes and networks in a single YAML file and run them together.\n\n` +
        `Compose features:\n` +
        `• Define build context or use pre-built images per service.\n` +
        `• Declare environment variables via env_file or environment keys.\n` +
        `• Specify depends_on to control start order during development (not a substitute for health checks).\n\n` +
        `Commands:\n` +
        `• docker compose up -d — build (if needed) and start the stack.\n` +
        `• docker compose down — stop and remove containers, networks and default volumes created by Compose.\n\n` +
        `Tip: Keep Compose files simple for development and use dedicated orchestration (Kubernetes) for production scale when needed.`,
      code: { examples: ['docker compose up -d', 'docker compose up --build', 'docker compose down'] }
    },
    {
      id: 'optimize',
      title: 'Optimize Images & Advanced Build',
      summary: 'Multi-stage builds, caching, and build args',
      details:
        `Optimization reduces image size and build time — important for CI and deployments.\n\n` +
        `Strategies:\n` +
        `• Multi-stage builds: compile in a builder stage and copy only final artifacts into the runtime stage to keep final image small.\n` +
        `• Layer caching: order Dockerfile steps so that stable steps (like installing OS packages) are before frequently-changing steps (like copying source).\n` +
        `• Reduce number and size of RUN steps and remove build-time dependencies.\n` +
        `• Use --squash (when available) or careful layering for smaller images and fewer layers.\n\n` +
        `Analysis tools:\n` +
        `• docker history <image> to review layer sizes.\n` +
        `• dive (third-party) to inspect layers and file contents in images.`,
      code: { examples: ['docker build --no-cache -t myapp:latest .', 'docker build --build-arg API_KEY=xxxx -t myapp:with-arg .', 'docker history myapp:latest'] }
    },
    {
      id: 'push-registry',
      title: 'Push & Pull from Registry',
      summary: 'Tagging, pushing and pulling images for deployment',
      details:
        `To share images across hosts or with CI/CD, push them to a registry (Docker Hub, GitHub Container Registry, private registries).\n\n` +
        `Workflow:\n` +
        `• docker tag local:tag registry.user/repo:tag — prepare a tag for the remote registry.\n` +
        `• docker login registry — authenticate (use token-based auth for CI).\n` +
        `• docker push registry.user/repo:tag — upload image layers.\n` +
        `• docker pull registry.user/repo:tag — retrieve image on another host.\n\n` +
        `Best practices:\n` +
        `• Use semantic version tags (v1.2.3); avoid relying solely on 'latest' in production.\n` +
        `• Scan images in CI and sign images if your supply chain requires it (e.g., cosign).`,
      code: { examples: ['docker tag docker-test-app:2.0 anisulalam/docker-test-app:2.0', 'docker push anisulalam/docker-test-app:2.0', 'docker pull anisulalam/docker-test-app:2.0'] }
    },
    {
      id: 'cleanup',
      title: 'Cleanup & Diagnostics',
      summary: 'Remove unused images, containers and volumes safely',
      details:
        `Disk space can fill up with stopped containers, dangling images and unused volumes. Use the CLI to inspect usage before cleaning.\n\n` +
        `Commands:\n` +
        `• docker system df — see disk usage breakdown for images, containers and volumes.\n` +
        `• docker system prune — remove stopped containers and dangling images (prompts for confirmation).\n` +
        `• docker system prune -a — removes all unused images (be cautious; may force re-pulls).\n\n` +
        `Volume cleanup:\n` +
        `• docker volume ls and docker volume rm <name> to remove volumes you created and no longer need.\n\n` +
        `Tip: run diagnostic commands first and consider backing up important volumes before aggressive prune operations.`,
      code: { examples: ['docker system df', 'docker system prune', 'docker system prune -a'] }
    },
    {
      id: 'security',
      title: 'Security & Scanning',
      summary: 'Scan images, limit capabilities and follow least-privilege',
      details:
        `Security is essential across the build and runtime lifecycle. Follow least-privilege and scan images regularly.\n\n` +
        `Recommendations:\n` +
        `• Scan images in CI using docker scan (Snyk) or other scanners to find vulnerabilities in layers.\n` +
        `• Avoid running processes as root inside containers — create and use a non-root user in your Dockerfile.\n` +
        `• Limit container capabilities and avoid --privileged unless absolutely necessary.\n` +
        `• Consider read-only root filesystem for immutable workloads and mount writable paths separately.\n\n` +
        `Supply-chain considerations:\n` +
        `• Use signed images and reproducible builds where possible.\n` +
        `• Keep base images up-to-date and rebuild images periodically to pick up security fixes.`,
      code: { examples: ['docker scan myimage:tag', 'docker run --read-only', '# Use a non-root user inside Dockerfile'] }
    }
  ],

  // Full Bangla translations for every step (fluent & matching the English content)
  bn: [
    {
      id: 'intro',
      title: 'পরিচিতি ও প্রয়োজনীয়তা',
      summary: 'ডকার কি, কেন ব্যবহার করব এবং গাইডটি অনুসরণ করার জন্য যা লাগে',
      details:
        'ডকার একটি প্ল্যাটফর্ম যা অ্যাপ্লিকেশনকে কনটেইনার হিসেবে প্যাকেজ, বিতরণ এবং চালানোর সুযোগ দেয়। ' +
        'কনটেইনার আপনার অ্যাপ ও তার ডিপেন্ডেন্সিগুলো একসাথে বেঁধে দেয়, ফলে যে কোনো হোস্টে একইভাবে চলে।\n\n' +
        'কেন ডকার ব্যবহার করা উচিত:\n' +
        '• পুনরুত্পাদনযোগ্য পরিবেশ — "আমার কাছে চলে" সমস্যা কমায়।\n' +
        '• হালকা আইসোলেশন — ভার্চুয়াল মেশিনের তুলনায় দ্রুত আর কম রিসোর্স লাগে।\n' +
        '• পোর্টেবল ডিপ্লয়মেন্ট — ইমেজগুলো রেজিস্ট্রিতে পুশ করে যেকোনো হোস্টে নেওয়া যায়।\n\n' +
        'প্রয়োজনীয়তা:\n' +
        '1) Docker Desktop (Windows/macOS) অথবা Docker Engine (Linux) ইনস্টল করুন।\n' +
        '2) শেল (bash/PowerShell/Command Prompt) ব্যবহারে মৌলিক জ্ঞান থাকতে হবে।\n' +
        '3) একটি প্রজেক্ট ডিরেক্টরি এবং একটি Dockerfile (নিচে উদাহরণ আছে)।\n\n' +
        'এই গাইডে ইনস্টল যাচাই থেকে শুরু করে ইমেজ বিল্ড, রানটাইম ডিবাগ, স্টোরেজ, নেটওয়ার্কিং, Compose, অপ্টিমাইজেশন এবং রেজিস্ট্রিতে পুশ পর্যন্ত ধাপে ধাপে দেখানো আছে।',
      code: null
    },
    {
      id: 'verify-install',
      title: 'ইনস্টল যাচাই করুন',
      summary: 'আপনার মেশিনে ডকার আছে কি না পরীক্ষা করুন',
      details:
        'ডকার ক্লায়েন্ট এবং ডিমন ঠিকমত কাজ করছে কিনা যাচাই করতে নিচের কমান্ডগুলো চালান।\n\n' +
        'কমান্ডসমূহ:\n' +
        '• docker --version — ক্লায়েন্টের ভার্সন দেখায়।\n' +
        '• docker info — ডিমনের বিবরণ দেয় (রুটলেস মোড, স্টোরেজ ড্রাইভার ইত্যাদি)।\n' +
        '• docker run hello-world — ইমেজ পুল ও কনটেইনার রান করার আজমায়শ।\n\n' +
        'ট্রাবলশুটিং টিপস:\n' +
        '• Windows/macOS-এ Docker Desktop চালু আছে কিনা এবং WSL2 ইন্টিগ্রেশন অন আছে কিনা দেখুন (যদি WSL2 ব্যবহার করেন)।\n' +
        '• Linux-এ dockerd চালু আছে কিনা দেখুন এবং প্রয়োজনে আপনার ইউজারকে docker গ্রুপে যোগ করুন বা sudo ব্যবহার করুন।',
      code: { cmd: 'docker --version' }
    },
    {
      id: 'basic-cli',
      title: 'ডকার CLI বেসিকস',
      summary: 'প্রতিদিনের ব্যবহারের সবচেয়ে ব্যবহৃত কমান্ডগুলো',
      details:
        'ডকার CLI দিয়ে ইমেজ, কনটেইনার, নেটওয়ার্ক ও ভলিউম পরিচালনা করা যায়। প্রতিদিন যে কমান্ডগুলো দরকার তা জানা জরুরি।\n\n' +
        'সাধারণ কমান্ড:\n' +
        '• docker ps / docker ps -a — চলমান / সব কনটেইনার দেখাবে।\n' +
        '• docker images — হোস্টে থাকা ইমেজ তালিকা।\n' +
        '• docker pull / docker push — রেজিস্ট্রি থেকে টানা বা রেজিস্ট্রিতে পাঠানো।\n' +
        '• docker login — রেজিস্ট্রিতে লগিন (CI-তে টোকেন ব্যবহার করুন)।\n' +
        '• docker help এবং docker <command> --help — ফ্ল্যাগ ও ব্যবহার দেখুন।\n\n' +
        'টিপ: -v (ভলিউম), -p (পোর্ট) এবং --rm-এর মতো ফ্ল্যাগগুলোর সাহায্যে কনটেইনার কিভাবে চালায় তা অনুশীলন করুন।',
      code: { examples: ['docker help', 'docker login', 'docker pull nginx:latest'] }
    },
    {
      id: 'build-image',
      title: 'ইমেজ বিল্ড (Dockerfile থেকে)',
      summary: 'Dockerfile ও বিল্ড ফ্ল্যাগ ব্যবহার করে পুনরুত্পাদনযোগ্য ইমেজ তৈরি করা',
      details:
        'Dockerfile লেয়ার-বাই-লেয়ারভাবে ইমেজ তৈরি করে। প্রতিটি ইনস্ট্রাকশন একটি লেয়ার তৈরি করে যা ক্যাশে হয় এবং দ্রুত রিবিল্ডের সুবিধা দেয়।\n\n' +
        'Dockerfile লেখার শ্রেষ্ঠ অভ্যাস:\n' +
        '• ছোট এবং রক্ষণীত্মক বেস ইমেজ (alpine, debian-slim, distroless) ব্যবহার করুন যেখানে সম্ভব।\n' +
        '• প্যাকেজের সংস্করণ পিন করুন যাতে বিল্ড ডিটারমিনিস্টিক থাকে।\n' +
        '• multi-stage builds ব্যবহার করে বিল্ড-টাইম ডিপেন্ডেন্সি আলাদা রাখুন এবং শেষ ইমেজ ছোট রাখুন।\n' +
        '• RUN স্টেপগুলো যথাসম্ভব সংযুক্ত করে লেয়ার সংখ্যা কমান ও ক্যাশে ভালো ব্যবহার করুন।\n\n' +
        'বিল্ড টিপস:\n' +
        '• docker build -t name:tag . দিয়ে ট্যাগ করুন।\n' +
        '• --build-arg ব্যবহার করে বিল্ড-টাইম ভ্যারিয়েবল পাস করুন এবং --no-cache প্রয়োজনে টানা বিল্ড করুন।\n' +
        '• docker history <image> দেখে কোন লেয়ার কতটা সাইজ নেয় তা যাচাই করুন।',
      code: { examples: ['docker build -t my-vite-app .', 'docker build -t docker-test-app:1.0 .'] }
    },
    {
      id: 'run-containers',
      title: 'কনটেইনার চালানো (ইন্টারঅ্যাকটিভ ও ব্যাকগ্রাউন্ড)',
      summary: 'ডেভ, টেস্ট ও প্রোডাকশনে কনটেইনার কিভাবে চালাবেন',
      details:
        'কনটেইনার চালানোর বিভিন্ন মোড আছে—প্রতিটি উদ্দেশ্যভিত্তিক।\n\n' +
        '• Interactive: docker run -it <image> /bin/sh — ডিবাগ ও ফাইল পরীক্ষা করার জন্য।\n' +
        '• Detached: docker run -d --name app -p 8080:80 <image> — সার্ভিস ব্যাকগ্রাউন্ডে চালানোর জন্য।\n' +
        '• Short-lived: docker run --rm <image> command — চালানোর পর স্বয়ংক্রিয়ভাবে কনটেইনার মুছে ফেলে।\n\n' +
        'অন্যান্য দরকারী ফ্ল্যাগ:\n' +
        '• --name — পাঠযোগ্য নাম দিন।\n' +
        '• -p host:container — হোস্ট থেকে অ্যাক্সেস করার জন্য পোর্ট পাবলিশ করুন।\n' +
        '• -e বা --env-file — পরিবেশ ভ্যারিয়েবল পাস করুন (সিক্রেটগুলো ডাকারফাইলে রাখবেন না)।\n' +
        '• -v — ভলিউম বা বাইন্ড মাউন্ট (ডেভে লাইভ কোড আপডেটের জন্য ব্যবহারযোগ্য)।',
      code: {
        examples: [
          'docker run --name myapp -d -p 5173:5173 docker-test-app:1.0  # run in background',
          'docker run -it --rm docker-test-app:1.0 /bin/sh               # interactive debug session'
        ]
      }
    },
    {
      id: 'manage',
      title: 'কনটেইনার ও ইমেজ পরিচালনা',
      summary: 'কনটেইনার তালিকা, বন্ধ করা এবং অব্যবহৃত আইটেম অপসারণ',
      details:
        'প্রতিদিনের ওয়ার্কফ্লো-এ চলমান কনটেইনার দেখা, থামানো এবং মুছা দরকার হয়।\n\n' +
        'ওয়ার্কফ্লো:\n' +
        '1) docker ps — চলমান কনটেইনার দেখুন।\n' +
        '2) docker stop <name> — কনটেইনারকে Graceful ভাবে থামান।\n' +
        '3) docker rm <name> — থামো কনটেইনার মুছে ফেলুন।\n\n' +
        'ইমেজ ম্যানেজমেন্ট:\n' +
        '• docker images — ইমেজ তালিকা।\n' +
        '• docker rmi <image> — অব্যবহৃত ইমেজ মুছুন (প্রয়োজনে -f)।\n\n' +
        'টিপ: বর্ণনামূলক নাম ও ট্যাগ ব্যবহার করুন যাতে জরুরি ইমেজ ভুলবশত মুছে না যায়।',
      code: { examples: ['docker ps', 'docker ps -a', 'docker stop myapp', 'docker rm myapp', 'docker rmi docker-test-app:1.0'] }
    },
    {
      id: 'inspect-debug',
      title: 'ইনস্পেক্ট ও ডিবাগ',
      summary: 'কনটেইনারে ঘুসে সমস্যা খোঁজা ও ডায়াগনোজ করা',
      details:
        'সমস্যা হলে CLI থেকে লগ ও মেটাডেটা দেখে ডিবাগ করা যায়।\n\n' +
        'প্রধান কমান্ড:\n' +
        '• docker logs <container> — কনটেইনারের stdout/stderr দেখায়; -f যোগ করলে ফলো করা যায়।\n' +
        '• docker exec -it <container> /bin/sh — চলমান কনটেইনারে শেল ওপেন করে লাইভ ডিবাগ করা যায়।\n' +
        '• docker inspect <container|image> — JSON মেটাডেটা (env, mounts, network) দেয়।\n' +
        '• docker stats — কনটেইনারের রিসোর্স ব্যবহার দেখায় (CPU, memory)।\n\n' +
        'ডিবাগিং টিপস:\n' +
        '• প্রোড বাগ পুনরুত্পাদন করার চেষ্টা করুন ইন্টারঅ্যাকটিভ কনটেইনারে এবং ফাইল পারমিশন, env ভ্যারিয়েবল ও মাউন্ট পাথ চেক করুন।\n' +
        '• স্লিম ডিবাগ ইমেজ (busybox, alpine) ব্যবহার করে ওভারহেড কমান।',
      code: { examples: ['docker logs myapp', 'docker logs -f myapp', 'docker exec -it myapp /bin/sh', 'docker inspect myapp'] }
    },
    {
      id: 'storage',
      title: 'স্টোরেজ: ভলিউম বনাম বাইন্ড মাউন্ট',
      summary: 'কখন ডকার ভলিউম বা হোস্ট বাইন্ড মাউন্ট ব্যবহার করবেন',
      details:
        'ডকারে ডেটা প্যাকিংয়ের প্রধান দুটি উপায়: ভলিউম ও বাইন্ড মাউন্ট।\n\n' +
        'ভলিউম:\n' +
        '• Docker দ্বারা ম্যানেজ করা হয় (docker volume create)।\n' +
        '• ডাটাবেস ইত্যাদি স্থায়ী ডেটার জন্য উপযুক্ত।\n' +
        '• হোস্ট-নির্দিষ্ট পাথের উপর কম নির্ভরশীল।\n\n' +
        'বাইন্ড মাউন্ট:\n' +
        '• হোস্ট ডিরেক্টরি/ফাইল কনটেইনারে মাপ করে (e.g. -v /host:/container)।\n' +
        '• ডেভে লাইভ কোড সম্পাদনার জন্য উপযুক্ত।\n' +
        '• উইন্ডোজ/লিনাক্স পাথ ফরম্যাট ও পারমিশন কনফ্লিক্টের দিকে সাবধান।\n\n' +
        'টিপস:\n' +
        '• ডাটাবেস ডেটার জন্য নামকৃত ভলিউম ব্যবহার করুন।\n' +
        '• ডেভেলপমেন্টে সোর্স মাউন্ট করতে বাইন্ড মাউন্ট ব্যবহার করুন যাতে প্রতিবার ইমেজ বিল্ড করতে না হয়।',
      code: {
        examples: [
          'docker volume create myvolume',
          'docker run -it --rm -v myvolume:/app anisulalam/uimanager:1.0',
          'docker run -v "F:\\\\docker-learning\\\\docker-test-app:/myapp" anisulalam/docker-test-app:2.0'
        ]
      }
    },
    {
      id: 'networking',
      title: 'নেটওয়ার্কিং: ডিফল্ট বনাম ইউজার নেটওয়ার্ক',
      summary: 'কনটেইনার কীভাবে যোগাযোগ করে এবং কখন কাস্টম নেটওয়ার্ক বানাবেন',
      details:
        'ডকার নেটওয়ার্কিং আপনার কনটেইনারগুলিকে আলাদা করে ও সার্ভিস-নেম ভিত্তিক ডিসকভারি দেয় (নেটওয়ার্ক ধরনের উপর নির্ভর করে)।\n\n' +
        'ডিফল্ট ব্রিজ নেটওয়ার্ক:\n' +
        '• IP-ভিত্তিক যোগাযোগ পায় কিন্তু কনটেইনার নাম দ্বারা DNS রেজলভ করে না।\n' +
        '• সহজ এক-হোস্ট সেটআপে পোর্ট-ম্যাপিং সহ ব্যবহার্য।\n\n' +
        'ইউজার-ডিফাইনড ব্রিজ:\n' +
        '• docker network create <name> দিয়ে তৈরি করুন।\n' +
        '• একই নেটওয়ার্কে থাকা কনটেইনারগুলো একে অপরকে নাম দিয়ে রেজলভ করতে পারে।\n\n' +
        'অন্যান্য মোড:\n' +
        '• host নেটওয়ার্ক (Linux) — হোস্ট নেটওয়ার্ক শেয়ার করে।\n' +
        '• overlay নেটওয়ার্ক — মাল্টি-হোস্ট সেটআপে ব্যবহৃত হয় (Swarm/Kubernetes)।\n\n' +
        'টিপ: বহু-কন্টেইনার অ্যাপের জন্য ইউজার-ডিফাইনড ব্রিজ ব্যবহার করলে সার্ভিস-নেম ডিসকভারি সুবিধা পাবেন।',
      code: { examples: ['docker network create mynet', 'docker run --network mynet --name db -d postgres:latest', 'docker network inspect mynet'] }
    },
    {
      id: 'compose',
      title: 'ডকার কম্পোজ: বহু-কন্টেইনার অ্যাপ',
      summary: 'docker-compose.yml দিয়ে একসাথে সার্ভিস, নেটওয়ার্ক ও ভলিউম ঘোষণা করুন',
      details:
        'Docker Compose-এ একাধিক সার্ভিস, ভলিউম ও নেটওয়ার্ক একটি YAML ফাইলে ডিক্লেয়ার করে একসাথে চালানো যায়।\n\n' +
        'Compose এর সুবিধা:\n' +
        '• প্রতিটি সার্ভিসে বিল্ড কন্টেক্সট বা পুরোনো ইমেজ ব্যবহার করতে পারবেন।\n' +
        '• env_file বা environment দিয়ে পরিবেশ ভ্যারিয়েবল সেট করা যায়।\n' +
        '• depends_on দিয়ে ডেভে স্টার্ট অর্ডার কন্ট্রোল করা যায় (health checks নয়)।\n\n' +
        'কমান্ডসমূহ:\n' +
        '• docker compose up -d — স্ট্যাকটি বিল্ড করে ব্যাকগ্রাউন্ডে চালাবে।\n' +
        '• docker compose down — স্ট্যাক বন্ধ ও রিসোর্সগুলো অপসারণ করে।\n\n' +
        'টিপ: ডেভেলপমেন্টের জন্য Compose ফাইলকে সরল রাখুন; প্রোডাকশনে স্কেল/অর্কেস্ট্রেশনের জন্য Kubernetes বিবেচনা করুন।',
      code: { examples: ['docker compose up -d', 'docker compose up --build', 'docker compose down'] }
    },
    {
      id: 'optimize',
      title: 'ইমেজ অপ্টিমাইজ ও অ্যাডভান্সড বিল্ড',
      summary: 'মাল্টি-স্টেজ বিল্ড, ক্যাশিং এবং বিল্ড আর্গুমেন্টস',
      details:
        'ইমেজ অপ্টিমাইজ করার ফলে সাইজ কমে ও CI-এ বিল্ড দ্রুত হয় — ডিপ্লয়মেন্টেও সুবিধা মেলে।\n\n' +
        'কৌশলগুলো:\n' +
        '• Multi-stage builds: বিল্ড-স্টেজে compile করে শুধু প্রয়োজনীয় ফাইলগুলোই রUNTIME ইমেজে কপি করুন।\n' +
        '• লেয়ার ক্যাশিং: Dockerfile-এ স্থিতিস্থাপক ধাপগুলোকে উপরে রাখুন যাতে দ্রুত rebuild হয়।\n' +
        '• RUN স্টেপ কমান ও বিল্ড-টাইম ডিপেন্ডেন্সি সরান।\n' +
        '• docker history দিয়ে লেয়ার বিশ্লেষণ করুন এবং প্রয়োজনমত কমান।\n\n' +
        'অ্যানালাইসিস টুল:\n' +
        '• dive (থার্ড-পার্টি) ব্যবহার করে লেয়ার ভেতরে ফাইল দেখে অপ্টিমাইজ করুন।',
      code: { examples: ['docker build --no-cache -t myapp:latest .', 'docker build --build-arg API_KEY=xxxx -t myapp:with-arg .', 'docker history myapp:latest'] }
    },
    {
      id: 'push-registry',
      title: 'রেজিস্ট্রিতে পুশ ও পুল',
      summary: 'ইমেজ ট্যাগিং, পুশ করা এবং রেজিস্ট্রি থেকে আনা',
      details:
        'ইমেজ শেয়ার করতে বা CI/CD থেকে ডিপ্লয় করতে রেজিস্ট্রিতে পুশ করা প্রয়োজন। (Docker Hub, GHCR, বা প্রাইভেট রেজিস্ট্রি)\n\n' +
        'ওয়ার্কফ্লো:\n' +
        '• docker tag local:tag registry.user/repo:tag — রিমোট ট্যাগ বানান।\n' +
        '• docker login registry — লগইন করুন (CI-তে টোকেন ব্যবহার করুন)।\n' +
        '• docker push registry.user/repo:tag — ইমেজ আপলোড করুন।\n' +
        '• docker pull registry.user/repo:tag — অন্য হোস্টে ইমেজ টানুন।\n\n' +
        'বাস্তব অভ্যাস:\n' +
        '• semantic version ট্যাগ (v1.2.3) ব্যবহার করুন; প্রোডাকশনে শুধু latest-এ নির্ভর করবেন না।\n' +
        '• CI-তে ইমেজ স্ক্যান ও সাইনিং বিবেচনা করুন (cosign ইত্যাদি)।',
      code: { examples: ['docker tag docker-test-app:2.0 anisulalam/docker-test-app:2.0', 'docker push anisulalam/docker-test-app:2.0', 'docker pull anisulalam/docker-test-app:2.0'] }
    },
    {
      id: 'cleanup',
      title: 'ক্লিনআপ ও ডায়াগনস্টিক্স',
      summary: 'অব্যবহৃত ইমেজ, কনটেইনার ও ভলিউম নিরাপদে মুছুন',
      details:
        'স্টপ হওয়া কনটেইনার, ড্যাঙ্গলিং ইমেজ ও অন-প্রয়োজনীয় ভলিউম ডিস্ক পূর্ণ করে দিতে পারে। ক্লিনআপের আগে ব্যবহার যাচাই করুন।\n\n' +
        'কমান্ডসমূহ:\n' +
        '• docker system df — ডিস্ক ব্যবহারের সারাংশ দেখায়।\n' +
        '• docker system prune — স্টপ কনটেইনার ও dangling images মুছে দেয় (কনফার্ম করে)।\n' +
        '• docker system prune -a — অনইউজড সব ইমেজও মুছে দেয় (সতর্ক থাকুন)।\n\n' +
        'ভলিউম ক্লিনআপ:\n' +
        '• docker volume ls এবং docker volume rm <name> দিয়ে যে ভলিউমগুলো আর দরকার নেই সেগুলো মুছুন।\n\n' +
        'টিপ: আগ্রাসী prune করার আগে সংরক্ষিত ডেটা ব্যাকআপ নিন যদি প্রয়োজন হয়।',
      code: { examples: ['docker system df', 'docker system prune', 'docker system prune -a'] }
    },
    {
      id: 'security',
      title: 'সিকিউরিটি ও স্ক্যানিং',
      summary: 'ইমেজ স্ক্যান, পারমিশন সীমিত করা এবং ন্যূনতম অধিকার নীতি অনুসরণ',
      details:
        'বিল্ড থেকে রUNTIME পর্যন্ত সিকিউরিটি গুরুত্বপূর্ণ। ন্যূননতম অধিকার (least-privilege) মেনে চলুন এবং নিয়মিত স্ক্যান করুন।\n\n' +
        'প্রস্তাবনা:\n' +
        '• CI-তে docker scan (Snyk) বা অন্যান্য টুল ব্যবহার করে ইমেজ ভলনারেবিলিটি চেক করুন।\n' +
        '• কনটেইনারে root হিসেবে প্রক্রিয়া চালাবেন না — Dockerfile-এ non-root ইউজার ব্যবহার করুন।\n' +
        '• --privileged এড়িয়ে চলুন, এবং কনটেইনারের capability কমান।\n' +
        '• read-only rootfs বিবেচনা করুন যেখানে উপযুক্ত এবং লিখনযোগ্য পথ আলাদাভাবে মাউন্ট করুন।\n\n' +
        'সাপ্লাই-চেইন:\n' +
        '• ইমেজ সাইনিং ও পুনরুৎপাদনযোগ্য বিল্ড প্রয়োগ করুন যদি প্রয়োজন হয়।\n' +
        '• বেস ইমেজগুলো আপডেট রাখুন এবং নিয়মিত ইমেজ রবিল্ড করে নিরাপত্তা ফিক্স আনুন।',
      code: { examples: ['docker scan myimage:tag', 'docker run --read-only', '# Use a non-root user inside Dockerfile'] }
    }
  ]
};
