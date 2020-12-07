//Declare and init
import ExhibitionDetailPage from "./pages/exhibition-details.js";
import NavBar from "./components/nav.js";
import HomePage from "./pages/home.js";
import Map from "/pages/map.js";
import Exhibitions from "./pages/exhibitions.js";
import OnboardingPage from "/pages/onboarding.js";
import OnboardingPage2 from "/pages/onboarding2.js";
import OnboardingPage3 from "/pages/onboarding3.js";
import spaService from "./js/spa.js";


//Declare and init

let map = new Map();
let exhibitions = new Exhibitions();
let homePage = new HomePage();
let nav = new NavBar();
let exhibitionDetailPage = new ExhibitionDetailPage();
let onboardingPage = new OnboardingPage();
let onboardingPage2 = new OnboardingPage2();
let onboardingPage3 = new OnboardingPage3();

spaService.init();

window.pageChange = () => spaService.pageChange();
window.openCloseNav = () => homePage.openCloseNav();
window.closeNav = () => nav.closeNav();


