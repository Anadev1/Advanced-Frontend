"use strict";

// import components, pages and services
import spaService from "spa.js";

spaService.init();

window.pageChange = () => spaService.pageChange();
