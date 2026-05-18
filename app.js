// import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
// import { createApp } from "https://unpkg.com/vue@3/dist/vue.global.js";
import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";
import Service from "./components/sercive.js";
import About from "./components/About.js";
import Skill from "./components/skill.js";
import Project from "./components/project.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";

// @ts-ignore
const { createApp } = Vue;
const App = createApp({});

App.component("navbar-component", Navbar);
App.component("hero-section", Hero);
App.component("service-section", Service);
App.component("about-section", About);
App.component("skills-section", Skill);
App.component("project-section", Project);
App.component("contact-section", Contact);
App.component("footer-component", Footer);

App.mount("#app");
