console.log("Hello world");

function addMovie(event) {
  event.preventDefault();
  let inputField = document.querySelector("input");
  let movie = document.createElement("li");

  let movieTitle = document.createElement("span"); // input from user to new span
  movieTitle.textContent = inputField.value;

  movieTitle.addEventListener("click", crossOffMovie);

  movie.appendChild(movieTitle);

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", deleteMovie);

  movie.appendChild(deleteBtn);

  let movieList = document.querySelector("ul");
  movieList.appendChild(movie);

  inputField.value = "";

  console.log(addMovie);
}

let submitBtn = document.querySelector("form");

submitBtn.addEventListener("submit", addMovie);

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = "Movie Deleted!";
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if (event.target.classList === event.target.classList.contains("checked")) {
    message.textContent = "Movie Watched!";
  } else {
    message.textContent = "Movie added back";
  }
}

let message = document.querySelector("#message");
