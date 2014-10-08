/*global Asteroids */
(function () {
  if (typeof window.Asteroids === "undefined" ) {
    window.Asteroids = {};
  }
  
  var Util = Asteroids.Util;
  
  var Asteroid = Asteroids.Asteroid = function (pos, game) {
    this.pos = pos;
    // this.game = game;
    Asteroids.MovingObject.call(this, { 
      pos: pos, 
      vel: Util.randomVel(4), 
      radius: Asteroid.RADIUS, 
      color: Asteroid.COLOR,
      game: game 
    });
  };
  
  Util.inherits.call(Asteroid, Asteroids.MovingObject);

  Asteroid.COLOR = "#3B003B";
  Asteroid.RADIUS = 5;  
  
})();