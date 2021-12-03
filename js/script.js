//Typewriter effect
const indexType = document.getElementById('index-type');

let typewriter = new Typewriter(indexType, {
    loop: false,
    delay: 100
});

typewriter.typeString("I'm a web developer").start();


//Mobile menu
let $menuOpen = false;
let $mobileWidth = window.matchMedia( "(min-width: 768px)" );

const $toggleMenu = function(){
    $('.sidebar-hamburger').toggleClass('open');
    $('.nav-container').toggleClass('open');
    if ($menuOpen === false)
        { $menuOpen = true; } else { $menuOpen = false; }
}

$(document).ready(function(){
	$('.sidebar-hamburger').click($toggleMenu);
});

$mobileWidth.addEventListener("change", () => {
  if ($mobileWidth.matches && $menuOpen) {
    $toggleMenu();
  }
});

$(document).click((event) => {
    if (!$(event.target).closest('.nav-container').length && $menuOpen) {
        $toggleMenu();
    }        
  });