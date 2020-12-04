// import components, pages and services
import spaService from "./js/spa.js";
import Map from "/pages/map.js";
import Exhibitions from "./pages/exhbitions.js";
import ExhibitionsDetails from "/pages/exhibitions-details.js";


spaService.init();
let map = new Map();
let exhibitionsDetails = new ExhibitionsDetails();

window.pageChange = () => spaService.pageChange();