const $title = document.querySelector(".title");
const $toggleImage = document.querySelector(".toggleImage");
const $searchInputBox = document.querySelector(".searchInput");
const $searchIcon = document.getElementById("searchIcon");
const $inputClearBtn = document.querySelector(".inputClearBtn");
const $heartBtn = document.querySelector(".heartBtn");
const $toggleMenu = document.querySelector(".toggleMenu");
const $following = document.querySelector(".following");
const $favorites = document.querySelector(".favorites");
const $followingIcon = document.querySelector(".following img");
const $favoritesIcon = document.querySelector(".favorites img");


$title.addEventListener("mouseup", function () {
  $toggleImage.classList.add('visible');
  if ($toggleMenu.classList.contains('visible')){
    $toggleMenu.classList.remove('visible');
  }else{
    $toggleMenu.classList.add('visible');
  } 
});

document.addEventListener("click", function (e) {
  if ($toggleMenu.classList.contains('visible')) {
    if (!e.target.closest('.titleToggle')) {
        $toggleMenu.classList.remove('visible');
    }
  }
});


$searchInputBox.addEventListener("focus", function () {
  $searchIcon.classList.add("hidden");
  $inputClearBtn.classList.remove("hidden");
});

$searchInputBox.addEventListener("focusout", function () {
  $searchIcon.classList.remove("hidden");
  $inputClearBtn.classList.add('hidden');
});

$inputClearBtn.addEventListener("mousedown", function () {
  $searchInputBox.value = "";
});

$heartBtn.addEventListener("mouseup", function () {
  $heartBtn.src = "./image/fullHeart.svg";
});

$following.addEventListener("mousedown", function () {
  $followingIcon.src = "./image/togglePersonActive.svg";
});
$following.addEventListener("mouseup", function () {
  $followingIcon.src = "./image/togglePerson.svg";
});

$favorites.addEventListener("mousedown", function () {
  $favoritesIcon.src = "./image/toggleStarActive.svg";
});
$favorites.addEventListener("mouseup", function () {
  $favoritesIcon.src = "./image/toggleStar.svg";
});
