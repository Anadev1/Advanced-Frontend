// import components, pages and services
import spaService from "./js/spa.js";
import ExhibitionsDetailPage from "./pages/exhibition-details.js";
import NavBar from "./components/nav.js";
import HomePage from "./pages/home.js";
import Map from "/pages/map.js";
import Exhibitions from "./pages/exhbitions.js";




//Declare and init
spaService.init();
let map = new Map();
let exhibitions = new Exhibitions();
let nav = new NavBar();
let homePage = new HomePage();
let exhibitionsDetailPage = new ExhibitionsDetailPage();

window.pageChange = () => spaService.pageChange();