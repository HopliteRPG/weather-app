export { formValidation };

function formValidation() {
  let searchButton = document.querySelector(".searchButton");
  let searchBar = document.querySelector(".searchbarInput");
  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(searchBar.value);
  });
}
