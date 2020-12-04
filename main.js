// import components, pages and services
import spaService from "./js/spa.js";
import Map from "/pages/map.js";
import Exhibitions from "./pages/exhbitions.js";

spaService.init();
let map = new Map();

window.pageChange = () => spaService.pageChange();