// import components, pages and services
import ExhibitionsDetailPage from "./pages/exhibition-details.js";
import NavBar from "./components/nav.js";
import HomePage from "./pages/home.js";
import Map from "/pages/map.js";
import Exhibitions from "./pages/exhbitions.js";
import spaService from "./js/spa.js";




//Declare and init
let map = new Map();
let exhibitions = new Exhibitions();
let nav = new NavBar();
let homePage = new HomePage();
let exhibitionsDetailPage = new ExhibitionsDetailPage();

spaService.init();

window.pageChange = () => spaService.pageChange();
//window.openNav = () => homePage.openNav();

document.querySelector(".nav-btn").addEventListener("click", homePage.openNav());
