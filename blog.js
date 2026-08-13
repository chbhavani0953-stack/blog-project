async function displayBlogs() {
  const response = await fetch('http://localhost:3001/blogs');   
  const blogPosts = await response.json();

  const blogList = document.getElementById("blogList");
  blogList.innerHTML = "";

  blogPosts.forEach(post => {
    const blogCard = document.createElement("article");
    blogCard.classList.add("blog-card");
    blogCard.innerHTML = `
      <h2>${post.title}</h2>
      <p><strong>By:</strong> ${post.name} (${post.email})</p>
      <p>${post.content}</p>
      <small>Posted on: ${post.date}</small>
      <button onclick="editBlog(${post.id})">Edit</button>
      <button onclick="deleteBlog(${post.id})">Delete</button>
    `;
    blogList.appendChild(blogCard);
  });
}
document.getElementById("blogForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!name || !email || !title || !content) {
    alert("All fields are required!");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address!");
    return;
  }

  const editId = document.getElementById("blogForm").getAttribute("data-edit-id");

  if (editId) {
    await fetch(`http://localhost:3001/blogs/${editId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, title, content, date: new Date().toLocaleString() })
    });
    document.getElementById("blogForm").removeAttribute("data-edit-id");
  } else {
    await fetch('http://localhost:3001/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, title, content, date: new Date().toLocaleString() })
    });
  }

  displayBlogs();
  document.getElementById("blogForm").reset();
});
async function editBlog(id) {
  const response = await fetch(`http://localhost:3001/blogs/${id}`);  
  const post = await response.json();

  document.getElementById("name").value = post.name;
  document.getElementById("email").value = post.email;
  document.getElementById("title").value = post.title;
  document.getElementById("content").value = post.content;
  document.getElementById("blogForm").setAttribute("data-edit-id", id);
}
async function deleteBlog(id) {
  if (confirm("Are you sure you want to delete this blog?")) {
    await fetch(`http://localhost:3001/blogs/${id}`, { method: 'DELETE' });  
    displayBlogs();
  }
}
document.addEventListener("DOMContentLoaded", displayBlogs);