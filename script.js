const featureBtn = document.getElementById("feature-button");
const featureMenu = document.querySelector(".feature-menu");
const hideFeature = document.querySelector(".hide-feature");
const rotFeature = document.querySelector(".arrow1");

const companyBtn = document.getElementById("company-button");
const companyMenu = document.querySelector(".company-menu");
const hideCompany = document.querySelector(".hide-company");
const rotCompany = document.querySelector(".arrow2");

const body = document.querySelector("body");

if(window.screen.width > 875){
    // if desktop size
    featureBtn.addEventListener("click", function(){
        hideFeature.classList.toggle("hide-feature");
        rotFeature.classList.toggle("feature-arrow");
    });
    
    companyBtn.addEventListener("click", function(){
        hideCompany.classList.toggle("hide-company");
        rotCompany.classList.toggle("company-arrow");
    });
}else{
    // if mobile / tablet size
    featureBtn.addEventListener("click", function(){
        hideFeature.classList.toggle("hide-feature");
        rotFeature.classList.toggle("feature-arrow");
        featureMenu.classList.toggle("menu-position");
    });
    
    companyBtn.addEventListener("click", function(){
        hideCompany.classList.toggle("hide-company");
        rotCompany.classList.toggle("company-arrow");
        companyMenu.classList.toggle("menu-position");
    });
}

// mobile sidebar menu
const navItems = document.querySelector(".items-container");
const menu = document.querySelector(".ham-menu");
const closeMenu = document.querySelector(".close-menu-mobile img");
const overlay = document.querySelector(".black-overlay");

menu.addEventListener("click", function(){
    navItems.classList.add("slide");
    overlay.style.opacity = "1";
    overlay.style.zIndex = "2";
    body.style.overflowY = "hidden";
});

closeMenu.addEventListener("click", function(){
    navItems.classList.remove("slide");
    overlay.style.opacity = "0";
    overlay.style.zIndex = "-1";
    body.style.overflowY = "scroll";
});
