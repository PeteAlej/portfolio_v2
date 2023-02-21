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
    switch(navElement){
        case "home":
            element = document.getElementsByClassName("topbar-home");
            arrow = document.getElementsByClassName("bubble1");
            element[0].style.opacity = 1;
            arrow[0].style.opacity = 1;
            break;
        case "aboutme":
            element = document.getElementsByClassName("topbar-aboutme");
            arrow = document.getElementsByClassName("bubble2");
            element[0].style.opacity = 1;
            arrow[0].style.opacity = 1;
            break;
        case "projects":
            element = document.getElementsByClassName("topbar-projects");
            arrow = document.getElementsByClassName("bubble3");
            element[0].style.opacity = 1;
            arrow[0].style.opacity = 1;
            break;
        case "contact":
            element = document.getElementsByClassName("topbar-contact");
            arrow = document.getElementsByClassName("bubble4");
            element[0].style.opacity = 1;
            arrow[0].style.opacity = 1;
            break;
    }
}

function hideNavNames(obj) {
    let navElement = obj.id;
    switch(navElement){
        case "home":
            element = document.getElementsByClassName("topbar-home");
            arrow = document.getElementsByClassName("bubble1");
            element[0].style.opacity = 0;
            arrow[0].style.opacity = 0;
            break;
        case "aboutme":
            element = document.getElementsByClassName("topbar-aboutme");
            arrow = document.getElementsByClassName("bubble2");
            element[0].style.opacity = 0;
            arrow[0].style.opacity = 0;
            break;
        case "projects":
            element = document.getElementsByClassName("topbar-projects");
            arrow = document.getElementsByClassName("bubble3");
            element[0].style.opacity = 0;
            arrow[0].style.opacity = 0;
            break;
        case "contact":
            element = document.getElementsByClassName("topbar-contact");
            arrow = document.getElementsByClassName("bubble4");
            element[0].style.opacity = 0;
            arrow[0].style.opacity = 0;
            break;
    }
}


// Constantemente chequeando los eventos

window.addEventListener("scroll", scrollReveal);