function toogleMenu() {
    const menu =document.querySelector(".menu-links");
    const icon =document.querySelector(".hamburger-icon");
    menu.classicList.toggle("open");
    icon.classicList.toggle("open");
}