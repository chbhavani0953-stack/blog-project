const express = require("express");

const app = express();
const PORT = 3001;


app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to my Express server!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
app.get("/blogs", (req, res) => {
  res.json([
    { id: 1, title: "First Blog", content: "This is my first blog post." },
    { id: 2, title: "Second Blog", content: "This is another blog post." }
  ]);
});
app.post("/add-blog", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required!" });
  }

  res.status(201).json({
    message: "Blog added successfully!",
    blog: { title, content }
  });
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});