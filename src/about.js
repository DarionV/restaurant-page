const renderAbout = function () {
  const contentContainer = document.querySelector("#content");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const image = document.createElement("img");
  image.src = "src/images/bertha.png";
  image.height = 400;
  image.classList.add("rounded");

  const text = `<p>
  Welcome to Big Bertha's Milkshake Emporium, where the shakes are
  legendary and the laughs are endless! Since 1926, we've been dishing
  out flavors wilder than a rodeo clown's outfit. <br /><br />
  From classic vanilla to shakes that'll make your taste buds do the
  cha-cha, join the flavor fiesta today and let's shake things up
  together!
</p>`;

  const background = document.createElement("div");
  background.classList.add("paragraph-bg");

  aboutContainer.innerHTML = text;
  aboutContainer.prepend(image);
  aboutContainer.appendChild(background);
  contentContainer.appendChild(aboutContainer);
};

export { renderAbout };
