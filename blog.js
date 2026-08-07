const form = document.getElementById("blogForm");
const blogList = document.getElementById("bloglist");

let blogs = [];

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const description = document.getElementById("description").value.trim();

    if (title === "" || author === "" || description === "") {
        alert("Please fill in all fields.");
        return;
    }

    const blog = {
        title: title,
        author: author,
        description: description
    };

    blogs.push(blog);

    displayBlogs();

    alert("Blog Published Successfully!");

    form.reset();

});

function displayBlogs() {

    blogList.innerHTML = "";

    blogs.forEach(function(blog) {

        const card = document.createElement("div");

        card.classList.add("card");

        card.innerHTML = `
            <h3>${blog.title}</h3>
            <h4>By ${blog.author}</h4>
            <p>${blog.description}</p>
        `;

        blogList.appendChild(card);

    });

}