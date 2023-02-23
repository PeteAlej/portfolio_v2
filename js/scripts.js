// Funciones

function scrollReveal() {
    let elements = document.querySelectorAll(".projects-intro");
    for(let i = 0; i < elements.length; i++){
        let windowHeight = window.innerHeight;
        let elementsTop = elements[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementsTop < windowHeight - elementVisible) {
            elements[i].classList.add("active");
        } 
        else {
            elements[i].classList.remove("active");
        }
    }
}

function viewNavNames(obj) {
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


// Constantemente chequeando los eventos

window.addEventListener("scroll", scrollReveal);