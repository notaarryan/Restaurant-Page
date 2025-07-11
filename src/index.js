import "./style.css";
import { Home } from "./home";
import { Menu } from "./menu";
import { About } from "./about";
class App {
  constructor() {
    this.loadHome = this.loadHome.bind(this);
    this.loadMenu = this.loadMenu.bind(this);
    this.loadAbout = this.loadAbout.bind(this);
    this.load = this.load.bind(this);
    this.cacheDom();
    this.bindEvents();
  }

  cacheDom() {
    this.contentDiv = document.getElementById("content");
    this.homeBtn = document.getElementById("home");
    this.aboutBtn = document.getElementById("about");
    this.menuBtn = document.getElementById("menu");
  }

  loadHome() {
    while (this.contentDiv.firstChild) {
      this.contentDiv.removeChild(this.contentDiv.firstChild);
    }
    localStorage.setItem("currentPage", "home");
    new Home();
  }

  loadMenu() {
    while (this.contentDiv.firstChild) {
      this.contentDiv.removeChild(this.contentDiv.firstChild);
    }
    localStorage.setItem("currentPage", "menu");
    new Menu();
  }

  loadAbout() {
    while (this.contentDiv.firstChild) {
      this.contentDiv.removeChild(this.contentDiv.firstChild);
    }
    localStorage.setItem("currentPage", "about");
    new About();
  }

  load() {
    let page = localStorage.getItem("currentPage");
    if (page === "home") {
      this.loadHome();
    } else if (page === "menu") {
      this.loadMenu();
    } else if (page === "about") {
      this.loadAbout();
    } else {
      this.loadHome();
    }
  }

  bindEvents() {
    this.homeBtn.addEventListener("click", this.loadHome);

    this.aboutBtn.addEventListener("click", this.loadAbout);

    this.menuBtn.addEventListener("click", this.loadMenu);

    window.addEventListener("load", this.load);
  }
}

new App();
