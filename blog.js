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
  const newPost = {
    id: blogPosts.length + 1,
    name: name,
    email: email,
    title: title,
    content: content,
    date: new Date().toLocaleString()
  };

  blogPosts.push(newPost);
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
    `;
    blogList.appendChild(blogCard);
  });
}