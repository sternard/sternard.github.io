var app = document.getElementById('handwriting');

var typewriter = new Typewriter(app, {
    loop: false,
    delay: 100
});

typewriter.typeString("I'm a web developer").start();