// import components, pages and services
import spaService from "./js/spa.js";
import ExhibitionsDetailPage from "./pages/exhbitions-details.js";
import NavBar from "./components/nav.js";
import HomePage from "./pages/home.js";
//import Map from "/pages/map.js";
//import Exhibitions from "./pages/exhbitions.js";


let exhibitionsDetailsPage = new ExhibitionsDetailPage();

//Declare and init
spaService.init();
let map = new Map();
let exhibitions = new Exhibitions();
let map = new Map();
let nav = new NavBar();
let homePage = new HomePage();

window.pageChange = () => spaService.pageChange();