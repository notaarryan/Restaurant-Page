import burger1 from "./images/burger1.png";
import burger2 from "./images/burger2.png";
import burger3 from "./images/burger3.png";
import burger4 from "./images/burger4.png";
import mainBurger from "./images/main-burger.png";

class Home {
  constructor() {
    this.#cacheDom();
    this.#render();
  }

  #cacheDom() {
    this.contentDiv = document.getElementById("content");
  }

  #render() {
    let leftDiv = document.createElement("div");
    leftDiv.classList.toggle("left-section");

    let textDiv = document.createElement("div");
    textDiv.classList.toggle("text");

    let textTopDiv = document.createElement("div");
    textTopDiv.classList.toggle("top");
    textTopDiv.innerText = "THE ULTIMATE";

    let textMidDiv = document.createElement("div");
    textMidDiv.classList.toggle("middle");
    textMidDiv.innerText = "Burger Club";

    let textLowerDiv = document.createElement("div");
    textLowerDiv.classList.toggle("lower");
    textLowerDiv.innerText = "Savor the Flavor, Join the Club!";

    textDiv.appendChild(textTopDiv);
    textDiv.appendChild(textMidDiv);
    textDiv.appendChild(textLowerDiv);

    let imageDiv = document.createElement("div");
    imageDiv.classList.toggle("images");

    let li = document.createElement("li");

    const burgerImg = [burger1, burger2, burger3, burger4];

    for (let i = 0; i < 4; i++) {
      let img = document.createElement("img");
      img.src = burgerImg[i];
      img.alt = `Burger${i + 1}`;
      li.appendChild(img);
    }

    imageDiv.appendChild(li);

    leftDiv.appendChild(textDiv);
    leftDiv.appendChild(imageDiv);

    let rightDiv = document.createElement("div");
    rightDiv.classList.toggle("right-section");

    let img = document.createElement("img");
    img.src = mainBurger;
    img.alt = "Main Burger";

    rightDiv.appendChild(img);

    this.contentDiv.appendChild(leftDiv);
    this.contentDiv.appendChild(rightDiv);
  }
}

export { Home };
