"use strict";

class SpaService{
  constructor(){
    this.defaultPage = "home";
  }
  
  init(){
    this.page = document.querySelectorAll(".page");
    this.pageChange();
  }

  // Hide all pages
  hideAllPages() {
    let pages = document.querySelectorAll(".page");
    for (let page of pages) {
      page.style.display = "none";
    }
  }

  // Show page or tab
  showPage(pageId) {
    hideAllPages();
    document.querySelector(`#${pageId}`).style.display = "block";
    setActiveTab(pageId);
  }

  //Change the page
  pageChange() {
    let page = "home";
    if (location.hash) {
      page = location.hash.slice(1);
    }
    this.showPage(page);
  }
}

const spaService = new SpaService();
export default spaService;