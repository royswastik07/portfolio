setTimeout(function(){
var typed = new Typed('.element', {
    strings: ["Swastik","Future Data Scientist", "Python Developer.", " Fresh Web Developer."," Part-Time Footballer", ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000
});
},1000)

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactme').addEventListener('submit', function (event) {
        event.preventDefault(); 

        alert('Form submitted!'); 
    });
});
