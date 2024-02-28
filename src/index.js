import "./style.css";
import { renderHome } from "./home";
import { renderAbout } from "./about";
import { renderMenu } from "./menu";
import Logo01 from "./images/logo-text.svg";
import Logo02 from "./images/logo-graphic.png";

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

const renderLogo = (function () {
  const logo01 = document.createElement("img");
  logo01.src = Logo01;
  logo01.height = 160;

  const logo02 = document.createElement("img");
  logo02.src = Logo02;
  logo02.width = 170;
  logo02.classList.add("rounded");

  document.querySelector(".logo-container").appendChild(logo02);
  document.querySelector(".logo-container").appendChild(logo01);
})();
