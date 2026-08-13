const express = require("express");
const cors=require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


let blogs = [];


app.get("/", (req, res) => {
  res.send("Welcome to my Express server!");
});

app.get("/blogs", (req, res) => {
  res.json(blogs);
});


app.get("/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.find(b => b.id === id);
  if (!blog) return res.status(404).json({ error: "Blog not found" });
  res.json(blog);
});

app.post("/blogs", (req, res) => {
  const { name, email, title, content, date } = req.body;

  if (!name || !email || !title || !content) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  const newBlog = {
    id: blogs.length + 1,
    name,
    email,
    title,
    content,
    date
  };

  blogs.push(newBlog);
  res.status(201).json({ message: "Blog added successfully!", blog: newBlog });
});


app.put("/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.find(b => b.id === id);

  if (!blog) return res.status(404).json({ error: "Blog not found" });

  const { name, email, title, content, date } = req.body;
  blog.name = name;
  blog.email = email;
  blog.title = title;
  blog.content = content;
  blog.date = date;

  res.json({ message: "Blog updated successfully!", blog });
});

app.delete("/blogs/:id", (req, res) => {
  const id = parseInt(req.params.id);
  blogs = blogs.filter(b => b.id !== id);
  res.json({ message: "Blog deleted successfully!" });
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});