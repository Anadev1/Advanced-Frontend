// import components, pages and services
import spaService from "./js/spa.js";
import Exhibitions from "./pages/exhbitions.js";
import ExhibitionsDetailPage from "./pages/exhbitions-details.js";

let exhibitionsDetailsPage = new ExhibitionsDetailPage();

spaService.init();

window.pageChange = () => spaService.pageChange();