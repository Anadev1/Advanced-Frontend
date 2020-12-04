// import components, pages and services
import spaService from "./js/spa.js";
import NavBar from "./components/nav.js";
import HomePage from "./pages/home.js";
//import Map from "/pages/map.js";
//import Exhibitions from "./pages/exhbitions.js";


spaService.init();
//let map = new Map();
let nav = new NavBar();
let homePage = new HomePage();

window.pageChange = () => spaService.pageChange();