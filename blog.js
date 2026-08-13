let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];


document.getElementById("blogForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (name === "" || email === "" || title === "" || content === "") {
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
  
    const post = blogPosts.find(p => p.id == editId);
    post.name = name;
    post.email = email;
    post.title = title;
    post.content = content;
    post.date = new Date().toLocaleString();
    document.getElementById("blogForm").removeAttribute("data-edit-id");
  } else {
    
    const newPost = {
      id: blogPosts.length + 1,
      name: name,
      email: email,
      title: title,
      content: content,
      date: new Date().toLocaleString()
    };
    blogPosts.push(newPost);
  }
  localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
  displayBlogs();
  document.getElementById("blogForm").reset();
});
function displayBlogs() {
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
       <button onclick="deleteBlog(${post.id})">
        Delete
      </button>
    `;
    blogList.appendChild(blogCard);
  });
}
function editBlog(id) {
  const post = blogPosts.find(p => p.id === id);
  document.getElementById("name").value = post.name;
  document.getElementById("email").value = post.email;
  document.getElementById("title").value = post.title;
  document.getElementById("content").value = post.content;
  document.getElementById("blogForm").setAttribute("data-edit-id", id);
}
function deleteBlog(id) {

  const confirmDelete = confirm(
    "Are you sure you want to delete this blog post?"
  );

  if (!confirmDelete) {
    return;
  }
  blogPosts = blogPosts.filter(post => post.id !== id);

  localStorage.setItem(
    "blogPosts",
    JSON.stringify(blogPosts)
  );

  displayBlogs();

  alert("Blog deleted successfully!");
}

document.addEventListener("DOMContentLoaded", displayBlogs);