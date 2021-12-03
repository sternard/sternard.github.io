//Typewriter effect
const type = document.getElementById('typewriter');

let typewriter = new Typewriter(type, {
    loop: false
});

typewriter.typeString('>cd "/coding_examples"').start();