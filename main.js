// import components, pages and services
import spaService from "./js/spa.js";
import Exhibitions from "./pages/exhbitions.js";

spaService.init();

window.pageChange = () => spaService.pageChange();