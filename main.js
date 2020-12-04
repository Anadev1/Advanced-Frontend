// import components, pages and services
import NavBar from "./components/nav.js";
import HomePage from "./pages/home.js";
import spaService from "./js/spa.js";

let navBar = new NavBar();
let homePage = new HomePage();

spaService.init();

window.pageChange = () => spaService.pageChange();