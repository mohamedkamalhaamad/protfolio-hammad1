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

window.addEventListener('DOMContentLoaded', () => {
    // اختر العناصر التي تريد تطبيق الانيميشن عليها
    const homeText = document.querySelector('.hero .div_text');
    const projectsSection = document.querySelector('.projects');

    // أضف الكلاس الابتدائي
    homeText.classList.add('animate-slide-down');
    projectsSection.classList.add('animate-slide-down');

    // بعد قليل، أضف الكلاس الذي يفعّل الانيميشن
    setTimeout(() => {
        homeText.classList.add('active');
        projectsSection.classList.add('active');
    }, 100); // تأخير بسيط للسماح للمتصفح بتطبيق الحالة الابتدائية
});