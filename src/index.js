import "./style.css";
import { renderHome } from "./home";
import { renderAbout } from "./about";
import { renderMenu } from "./menu";

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
  renderMenu();
});
aboutButton.addEventListener("click", () => {
  clearContent();
  renderAbout();
});

const clearContent = function () {
  document.querySelector("#content").innerHTML = "";
};
