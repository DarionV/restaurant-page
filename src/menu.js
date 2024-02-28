import Shake_01 from "./images/shake_01.png";
import Shake_02 from "./images/shake_02.png";
import Shake_03 from "./images/shake_03.png";
import Shake_04 from "./images/shake_04.png";
import Shake_05 from "./images/shake_05.png";

const renderMenu = function () {
  const contentContainer = document.querySelector("#content");

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  contentContainer.appendChild(menuContainer);

  flavours.forEach((flavour, index) => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");

    const image = document.createElement("img");
    image.src = flavour.imageName;
    image.classList.add("item", "rounded");

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("description");

    const title = document.createElement("h3");
    title.textContent = flavour.title;
    descriptionContainer.appendChild(title);

    const descriptionText = document.createElement("p");
    descriptionText.textContent = flavour.description;
    descriptionContainer.appendChild(descriptionText);

    itemContainer.appendChild(descriptionContainer);

    if (index % 2) {
      itemContainer.classList.add("right-clip");
      itemContainer.appendChild(image);
    } else {
      itemContainer.classList.add("left-clip");
      itemContainer.prepend(image);
    }

    menuContainer.appendChild(itemContainer);
  });
};

export { renderMenu };

const flavours = [
  {
    title: "Crazy Tripple Choco Moco Loco Delux",
    description: `Silky smooth icy milk with chocolate swirls 
        and crickety crackers. Topped with our new moco loco sauce and velvety whipper cream.`,
    imageName: Shake_01,
  },
  {
    title: "Strawberry dream cream extreme",
    description: `Chocolate chip mint ice cream with our signature
    dream cream and chocolate swooshiloos.
    Topped with sugary sprinkles and fairy dust`,
    imageName: Shake_02,
  },
  {
    title: "Big Bertha",
    description: `Big B’s favorite shake. Legend has it that she
    had one of these each morning before even getting out of bed.
    1 gallon of icy chocolaty love with soft delicious fluffy cream
    and sprinkely spronkles.`,
    imageName: Shake_03,
  },
  {
    title: "The classic",
    description: `Sometimes you want fluffy pluffy rainbow luxurious flavour bombs, but sometimes
    you just want to sit back, relax, and sip on a classic smooth vanilla milk shake. Nothing wrong with that.
    We've got you covered.`,
    imageName: Shake_04,
  },
  {
    title: "Showstopper",
    description: `Don't let its modest appearence fool you. This beast is packed with 12,000kcal of yummy goodness
    that will keep you full for the rest of the week. It's truly the trojan horse of milk shakes.`,
    imageName: Shake_05,
  },
];
