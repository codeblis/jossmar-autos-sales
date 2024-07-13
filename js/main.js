const menu_icon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
const lis = document.getElementsByClassName("li");
const img_menu_icon = document.getElementById("img-menu-icon");
let mostrar = false;

menu_icon.onclick = () => {
  if (mostrar) {
    menu.classList.remove("mostrar");
    menu.classList.add("oculto");
    img_menu_icon.src = "images/icons/menu.svg";
    for (let li of lis) {
      li.classList.add("li-show");
      li.classList.remove("li-oculto");
    }
    mostrar = false;
  } else {
    img_menu_icon.src = "images/icons/close.svg";
    menu.classList.add("mostrar");
    menu.classList.remove("oculto");
    for (let li of lis) {
      li.classList.add("li-oculto");
      li.classList.remove("li-show");
    }
    mostrar = true;
  }
};
