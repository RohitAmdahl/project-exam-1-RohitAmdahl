const title = document.querySelector(".tittleInfo");
title.innerHTML = "Design Blog | Search page";
const searchText = document.querySelector(".search-result");
console.log(searchText);

const searchButton = document.getElementById("search-cta_search-page");

searchButton.onclick = () => {
  const searchInput = document.querySelector("#search-box").value.toUpperCase();
  console.log(searchInput);
  const correctURLForThisSearch =
    "https://rohitkumar.rkamdahl.no/wp-json/wp/v2/search?search=" + searchInput;
  console.log(correctURLForThisSearch);

  async function searchApi() {
    try {
      const response = await fetch(correctURLForThisSearch);
      const searchResult = await response.json();
      console.log(searchResult);
      searchResult.forEach((search) => {
        searchText.innerHTML += `  <p class="search-result-text">${
          ("result", search.title)
        }</p>`;
      });
      // searchText.innerHTML += `  <p class="search-result-text">${searchResult[0].title}</p>`;
    } catch (error) {
      console.log(error);
    }
  }
  searchApi();
};
