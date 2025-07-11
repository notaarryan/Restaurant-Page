class About {
  constructor() {
    this.#cacheDom();
    this.#render();
  }

  #cacheDom() {
    this.contentDiv = document.getElementById("content");
  }

  #render() {
    const text = `Crafted as part of my web development journey, BURGER is a modern, single-page
                burger house concept built using vanilla JavaScript, HTML, and CSS. It showcases responsive design,
                dynamic DOM manipulation, and clean component-based structure. Combining aesthetic design with
                functional code, BURGER reflects my skills in front-end development and passion for building
                user-centric web experiences.`;

    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about-container";

    const aboutText = document.createElement("div");
    aboutText.id = "about-text";
    aboutText.innerText = "About";
    aboutContainer.appendChild(aboutText);

    const aboutDescription = document.createElement("div");
    aboutDescription.id = "about-description";
    aboutDescription.innerText = text;
    aboutContainer.appendChild(aboutDescription);
    this.contentDiv.appendChild(aboutContainer);
  }
}

export { About };
