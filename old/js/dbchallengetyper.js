//Typewriter effect
const type = document.getElementById('typewriter');

let typewriter = new Typewriter(type, {
    loop: false
});

typewriter.typeString('>exec "/database _challenge"').start();