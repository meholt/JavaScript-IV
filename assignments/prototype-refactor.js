/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
function GameObject(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  GameObject.prototype.destroy = function() {
    return `${this.name} was removed from the game.`;
  }

  function CharacterStats(charAttributes) {
    GameObject.call(this, charAttributes);
    this.healthPoints = charAttributes.healthPoints;
  }
  CharacterStats.prototype = Object.create(GameObject.prototype);
  CharacterStats.prototype.takeDamage = function() {
    return `${this.name} took damage.`;
  }

  function Humanoid(humanAttributes) {
    CharacterStats.call(this, humanAttributes);
    this.team = humanAttributes.team;
    this.weapons = humanAttributes.weapons;
    this.language = humanAttributes.language;
  }
   Humanoid.prototype = Object.create(CharacterStats.prototype);
   Humanoid.prototype.greet = function() {
     return `${this.name} offers a greeting in ${this.language}.`
   }