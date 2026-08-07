document.addEventListener("DOMContentLoaded", function(){
  alert("Welcome to My Website Home Page!");

  const welcomeBtn = document.getElementById("welcomeBtn");
  if (welcomeBtn) {
    welcomeBtn.addEventListener("click", function() {
      document.getElementById("message").innerText = "Thanks for visiting the Home Page!";
    });
  }

  const heading = document.querySelector("h1");
  heading.addEventListener("mouseover", function() {
    heading.style.color = "#ff9800"; 
  });
  heading.addEventListener("mouseout", function() {
    heading.style.color = "#333"; 
  });
  function displayHomeBlogs() {
    const homeBlogList = document.getElementById("homeBlogList");
    homeBlogList.innerHTML = "";
    const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    if (blogPosts.length === 0) {
      homeBlogList.innerHTML = "<p>No blog posts yet. Go to Blog page to add one!</p>";
      return;
    }

    blogPosts.forEach(post => {
      const blogCard = document.createElement("article");
      blogCard.classList.add("blog-card");
      blogCard.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content.substring(0, 100)}...</p>
        <small>By ${post.name} on ${post.date}</small>
      `;
      homeBlogList.appendChild(blogCard);
    });
  }
  displayHomeBlogs();
});