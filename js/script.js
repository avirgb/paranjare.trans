let menu = document.querySelector('#menu-bars');
let btnup = document.querySelector('#myBtn');
let navbar = document.querySelector('.navbar');

menu.onclick = (e) => {
    menu.classList.toggle('da-times');
    navbar.classList.toggle('active');
    
    e.preventDefault();
}
const menus = document.querySelector('#menu-bars');
document.addEventListener('click', function (e) {
    if (!menus.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});

window.scroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// document.querySelector('#search-icon').onclick = () =>{
//     document.querySelector('#search-form').classList.toggle('active');
// }
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}



// Active Menu With Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

