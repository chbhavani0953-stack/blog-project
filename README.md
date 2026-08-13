🚀 Overview
The Blog Project is a simple full‑stack web application where users can:

Add, edit, and delete blog posts.

View latest blogs on the Home page.

Navigate between Home and Blog pages.

Experience smooth animations, transitions, hover effects, and responsive design.

This project demonstrates frontend integration with backend APIs using Fetch API, deployment with GitHub Pages, and backend hosting with Express.js.
✨ Features
📝 Add new blog posts with title, content, author name, and email.

✏️ Edit existing blog posts.

❌ Delete blog posts.

📄 Display all blog posts dynamically.

🎨 Animations, transitions, hover effects, and smooth scrolling.

📱 Responsive design for desktop, tablet, and mobile.

🔗 Connected frontend with Express backend using Fetch API.
🛠️ Tech Stack
Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express.js

Hosting:

Frontend → GitHub Pages

Backend → Render/Heroku (for live API)

Version Control: Git & GitHub
📂 Project Structure
Code
blog-project/
│── server.js          # Express backend
│── public/
│    ├── index.html    # Home page
│    ├── blog.html     # Blog page
│    ├── index.css     # Home page styles
│    ├── blog.css      # Blog page styles
│    ├── index.js      # Home page scripts
│    └── blog.js       # Blog page scripts
│── README.md          # Documentation
📡 API Endpoints
Base URL: http://localhost:3001 (or Render/Heroku live link)
GET /blogs → Fetch all blogs

GET /blogs/:id → Fetch single blog by ID

POST /blogs → Add new blog

PUT /blogs/:id → Update blog by ID

DELETE /blogs/:id → Delete blog by ID
📑 Documentation
Frontend: Handles UI, forms, and Fetch API calls.

Backend: Provides REST APIs for blog CRUD operations.

links:
Git hub link:https://github.com/chbhavani0953-stack/Blog-project.git
deploy link:https://blog-project-6rsj.vercel.app

Deployment:

Frontend hosted on GitHub Pages.

Backend hosted on Render/Heroku.
👨‍💻 Author
Name: CHEBOINA BHAVANI

Role: FULL STACK DEVELOPER
