import combo from "./images/combo.png";
import desert from "./images/desert.png";
import fries from "./images/fries.png";
import newCollection from "./images/new.png";
import burgerMenu from "./images/burger-menu.png";
import salad from "./images/salad.png";
import sides from "./images/sides.png";
import wrap from "./images/wrap.png";

class Menu {
  constructor() {
    this.#cacheDom();
    this.#render();
  }

  #cacheDom() {
    this.contentDiv = document.getElementById("content");
  }

  #render() {
    const images = [
      burgerMenu,
      combo,
      desert,
      wrap,
      sides,
      salad,
      newCollection,
      fries,
    ];

    const names = [
      "Burger",
      "Combo",
      "Desert and Beverages",
      "Wraps",
      "Sides",
      "Salad",
      "New in the club!",
      "Fries",
    ];
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

    const menuText = document.createElement("div");
    menuText.id = "menu-text";
    menuText.innerText = "Menu";
    menuContainer.appendChild(menuText);

    const imageDiv = document.createElement("div");
    imageDiv.id = "images";
    for (let i = 0; i < images.length; i++) {
      const div = document.createElement("div");

      const imageElement = document.createElement("img");
      imageElement.src = images[i];
      div.appendChild(imageElement);

      const p = document.createElement("p");
      p.innerText = names[i];
      div.appendChild(p);
      imageDiv.appendChild(div);
    }
    menuContainer.appendChild(imageDiv);
    this.contentDiv.appendChild(menuContainer);
  }
}

export { Menu };
