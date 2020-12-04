// import components, pages and services
import spaService from "./js/spa.js";
import Map from "/pages/map.js";

spaService.init();
let map = new Map();

window.pageChange = () => spaService.pageChange();