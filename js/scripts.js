// Funciones

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("active", entry.isIntersecting);
    });
});

// Inicializando el observador para ir observando si el objeto tiene intersección con el viewport.

const item = document.querySelectorAll(".intro");
item.forEach((elem) => {
    observer.observe(elem);
});

function viewNavNames(obj) {
    let element = 0;
    let navElement = obj.id;
    let currentIcon = document.getElementById(navElement);
    switch(navElement){
        case "home":
            element = document.getElementsByClassName("home-cap");
            element[0].style.opacity = 1;
            break;
        case "aboutme":
            element = document.getElementsByClassName("aboutme-cap");
            element[0].style.opacity = 1;
            break;
        case "projects":
            element = document.getElementsByClassName("projects-cap");
            element[0].style.opacity = 1;
            break;
        case "contact":
            element = document.getElementsByClassName("contact-cap");
            element[0].style.opacity = 1;
            break;
    }
    currentIcon.style.opacity = 0;
}

function hideNavNames(obj) {
    let navElement = obj.id;
    let currentIcon = document.getElementById(navElement);
    switch(navElement){
        case "home":
            element = document.getElementsByClassName("home-cap");
            element[0].style.opacity = 0;
            break;
        case "aboutme":
            element = document.getElementsByClassName("aboutme-cap");
            element[0].style.opacity = 0;
            break;
        case "projects":
            element = document.getElementsByClassName("projects-cap");
            element[0].style.opacity = 0;
            break;
        case "contact":
            element = document.getElementsByClassName("contact-cap");
            element[0].style.opacity = 0;
            break;
    }
    currentIcon.style.opacity = 1;
}
