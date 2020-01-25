const menu = document.getElementById("menu-icon");
const aside = document.getElementById("aside");
menu.addEventListener("click", event => {
  if (menu.attributes.title.value === "hide") {
    aside.classList.toggle("hide");
    menu.firstChild.classList.toggle("fa-arrow-circle-right");
    menu.firstChild.classList.toggle("fa-arrow-circle-left");
    menu.setAttribute("title", "show");
  } else {
    aside.classList.toggle("hide");
    menu.firstChild.classList.toggle("fa-arrow-circle-right");
    menu.firstChild.classList.toggle("fa-arrow-circle-left");
    menu.setAttribute("title", "hide");
  }
});
