// import components, pages and services
import spaService from "./js/spa.js";
import Map from "/pages/map.js";
import Exhibitions from "./pages/exhbitions.js";
import ExhibitionsDetailPage from "./pages/exhbitions-details.js";

let exhibitionsDetailsPage = new ExhibitionsDetailPage();

//Declare and init
spaService.init();
let map = new Map();
let exhibitions = new Exhibitions();

window.pageChange = () => spaService.pageChange();