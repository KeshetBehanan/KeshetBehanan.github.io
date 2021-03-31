// particles-js

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  // Typed.js

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