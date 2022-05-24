const menuImg_btn = document.getElementById('mobileNav');
const mainNav = document.getElementById('mainNav');

function openMobileMenu(){
    menuImg_btn.style.display = "block";
    mainNav.style.display = "none";
}

function closeMobileMenu(){
    menuImg_btn.style.display = "none";
    mainNav.style.display = "block";
}