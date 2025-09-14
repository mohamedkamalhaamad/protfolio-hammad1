// add class to header on scroll

let header = document.querySelector('header');

window.onscroll = function() {

    if (this.scrollY >= 50) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}


// add class active to nav_Links

let nav_Links = document.getElementById("nav_links");

function op_cl_Menu() {
    nav_Links.classList.toggle("active")
}