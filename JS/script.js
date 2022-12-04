let backtotop = document.getElementById("backtop");
window.onscroll = function () {
  scrollfunction();
};
function scrollfunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backtotop.style.display = "block";
  } else {
    backtotop.style.display = "none";
  }
}

function topfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

