//Typewriter effect
const type = document.getElementById('typewriter');

let typewriter = new Typewriter(type, {
    loop: false,
    delay: 100
});

typewriter.typeString("I'm a web developer").start();