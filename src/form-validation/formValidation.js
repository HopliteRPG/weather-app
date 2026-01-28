export { formValidation };

function formValidation() {
  let searchButton = document.querySelector(".searchButton");
  let searchBar = document.querySelector(".searchbarInput");
  searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    let encodedSearchTerm = encodeURIComponent(searchBar.value);
    console.log(encodedSearchTerm);
  });
}
