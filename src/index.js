import "./style.css";
import { renderHome } from "./home";

renderHome();

const homeButton = document.querySelector(".js-home-button");
const menuButton = document.querySelector(".js-menu-button");
const aboutButton = document.querySelector(".js-about-button");

homeButton.addEventListener("click", () => {
  clearContent();
  renderHome();
});
menuButton.addEventListener("click", () => {
  clearContent();
});
aboutButton.addEventListener("click", () => {
  clearContent();
});

const clearContent = function () {
  document.querySelector("#content").innerHTML = "";
};
