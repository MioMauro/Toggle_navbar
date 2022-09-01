// classlist - show/gets all classes
//contains - checks classlist for specific class
// add - add class
// remove - remove class
// toggle - toggle class

const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener('click', function(){

    // Method one appear and disappear Links
    //if(links.classList.contains('show-links')) {
        //links.classList.remove('show-links')
    //} else {
        //links.classList.add('show-links')
    //}
//})
    // Method two with toggle-method
links.classList.toggle("show-links")})

// ATTENZIONE: nelle media query impostare .links{ height: auto}
