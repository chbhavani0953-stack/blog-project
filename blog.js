const form = document.getElementById("blogForm");
const blogContainer = document.getElementById("blogContainer");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const description = document.getElementById("description").value.trim();

    if(title === "" || author === "" || description === ""){
        alert("Please fill in all the fields.");
        return;
    }

    const blogCard = document.createElement("div");

    blogCard.classList.add("card");

    blogCard.innerHTML = `
        <h3>${title}</h3>
        <h4>By ${author}</h4>
        <p>${description}</p>
    `;

    blogContainer.prepend(blogCard);

    alert("Blog published successfully!");

    form.reset();

});