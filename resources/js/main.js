const menu = document.getElementById("menu-icon");
const aside = document.getElementById("aside");
menu.addEventListener("click", event => {
  if (menu.attributes.title.value === "hide") {
    aside.classList.add("hide");
    aside.classList.remove("show");
    menu.firstChild.setAttribute(
      "style",
      "transform: rotate(180deg);transition-duration: 1s"
    );
    menu.setAttribute("title", "show");
  } else {
    aside.classList.add("show");
    aside.classList.remove("hide");
    menu.firstChild.setAttribute(
      "style",
      "transform: rotate(0deg);transition-duration: 1s"
    );
    menu.setAttribute("title", "hide");
  }
});
