// const search = document.getElementsByClassName(".search");
const searchInput = document.getElementsByClassName("search-input")[0];

const search = document.getElementsByClassName("search")[0];

// const searchToShow = () => {
search.addEventListener("click", () => {
  searchInput.classList.add("active");
  searchInput.classList.remove("non-active");
});

// }
const closeBtn = document.getElementsByClassName("close-btn")[0];

closeBtn.addEventListener("click", () => {
  searchInput.classList.add("non-active");
  searchInput.classList.remove("active");
  searchInput.classList.add("active");
});

// slidebar menu categories-dropdown-slidedown

// const categories = document.getElementById("categories-slide")
// const slideDown = document.getElementById("slide-bar-menu-categories-dropdown-a")
// const dropDownMenu = document.getElementById("categories-dropdown-menu")

// slideDown.addEventListener("mouseenter", () => {
//   if (dropDownMenu.style.display == "none") {
//     dropDownMenu.style.display = "flex"
//   }

// })

// dropDownMenu.addEventListener("mouseout", () => {
//   dropDownMenu.style.display = "none"
// })

const closeBtn2 = document.getElementById("close-icon");
const slideMenu = document.getElementsByClassName("slide-bar-menu")[0];
const burgerMenu = document.getElementById("burger-menu");

burgerMenu.addEventListener("click",()=>{
  slideMenu.classList.add("active");

})

closeBtn2.addEventListener("click", () => {
  slideMenu.classList.remove("active")
});
