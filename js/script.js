// ### particles-js ### \\

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// ### Typed.js ### \\

var typed = new Typed('#typed', {
  strings: [
    'a Unity Game Developer',
    'a .NET Software Engineer',
    'a Designer',
    'a Full-Stack Web Developer',
    'a Gamer',
    'a Discord Bot Developer'
  ],
  smartBackspace: true,
  shuffle: true,
  loop: true,
  backDelay: 2000,
  backSpeed: 25,
  typeSpeed: 50,
  contentType: 'null',
});

// ### Custom JS ### \\

// Mobile viewport hight
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Loading
window.onload = function(){
  var loader = document.getElementById('loader');
  document.body.parentElement.className = '';
  loader.className += 'fade';
  setTimeout(function(){
    loader.parentElement.removeChild(loader);
  }, 1000);
}