// import components, pages and services
import spaService from "./js/spa.js";

spaService.init();

window.pageChange = () => spaService.pageChange();