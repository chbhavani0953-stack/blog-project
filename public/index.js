document.addEventListener("DOMContentLoaded", async function() {
  alert("Welcome to My Website Home Page!");

  const welcomeBtn = document.getElementById("welcomeBtn");
  if (welcomeBtn) {
    welcomeBtn.addEventListener("click", function() {
      document.getElementById("message").innerText = "Thanks for visiting the Home Page!";
    });
  }
  async function displayHomeBlogs() {
    const homeBlogList = document.getElementById("homeBlogList");
    homeBlogList.innerHTML = "";

    try {
      const response = await fetch("http://localhost:3001/blogs");
      const blogPosts = await response.json();

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
    } catch (error) {
      homeBlogList.innerHTML = "<p>Error loading blogs. Please try again later.</p>";
      console.error(error);
    }
  }

  displayHomeBlogs();
});