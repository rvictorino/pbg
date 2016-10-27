class Pbg {
  constructor() {
    this.actions = [];
    this.player;
    this.opponent;
    //create canvas
    if(arguments.length > 0){
      this.setCanvas(arguments[0]);
    } else {
      var canvas = document.createElement("canvas");
      canvas.setAttribute("id", "canvas_id");
      canvas.setAttribute("width", "500");
      canvas.setAttribute("height", "450");
      document.body.appendChild(canvas);
      this.setCanvas("canvas_id");
    }
  }

  addAction(action) {
    if(action instanceof AbstractAction){
      this.actions.push(action);
    } else {
      throw new TypeError("Bad type given: AbstractAction expected, " + typeof action  + " given");
    }
  }

  generateGif() {
    if(typeof GIF !== 'undefined'){
      var gif = new GIF();
      //TODO generate all the GIFs!!!
    } else {
      throw new ReferenceError("GIF is not defined. Did you include gif.js ?");
    }
  }

  play() {
      var intro = new IntroAction();
      intro.play(this.canvas);
  }

  // setters
  setCanvas(canvasID) {
    if(typeof fabric !== 'undefined'){
      var canvas = this.canvas = new fabric.Canvas(canvasID);
      fabric.Object.prototype.transparentCorners = false;
    } else {
      throw new ReferenceError("fabric is not defined. Did you include fabric.js ?");
    }
  }

  setPlayer(image, name, health,maxHealth,level,moves,bag){
    this.player = new Player();
  }

  setOpponent(image, name, health,maxHealth,level,moves,bag){
    this.opponent = new Player();
  }
}

class AbstractAction {
  constructor(){
    if(new.target === AbstractAction){
      throw new TypeError("Cannot construct abstract instance: AbstractAction");
    }
  }
}

class IntroAction extends AbstractAction {
  constructor() {
    super();
  }

  play(canvas){
    var imgtest = fabric.Image.fromURL('sprites/full_panel.png', function(img) {
      img.scaleToWidth(canvas.getWidth());
      img.set({
        left: 0,
        top: canvas.getHeight() - img.getHeight(),
        angle: 0
      });
      canvas.add(img);
    });
  }

}

class AttackAction extends AbstractAction {
  constructor() {
    super();
  }
}

class UseObjectAction extends AbstractAction {
  constructor() {
    super();

  }
}

class FleeAction extends AbstractAction {
  constructor(message) {
    super();
    this.message = message;
  }
}

class ChoosePokemonAction extends AbstractAction {
  constructor() {
    super();

  }
}

class Player {
  constructor(image="image/test.png", name="player", health=10,maxHealth=10,level=2,moves=[],bag=[]){
    this.avatar = image;
    this.name = name;
    this.health = health;
    this.maxHealth = maxHealth;
    this.level = level;
    this.moves = moves;
    this.bag = bag;
  }

  setAvatar(avatar){
    this.avatar.src = avatar;
  }

  getAvatar(){
    return this.avatar;
  }

  setName(name){
    this.name = name;
  }

  getName(){
    return this.name;
  }

  setHealth(health){
    this.health = health;
  }

  getHealth(){
    return this.health;
  }

  setMaxHealth(maxHealth){
    this.maxHealth = maxHealth;
  }

  getMaxHealth(){
    return this.maxHealth;
  }

  setLevel(level){
    this.level = level;
  }

  getLevel(){
    return this.level;
  }

  setBag(bag){
    this.bag = bag;
  }

  getBag(){
    return bag;
  }

  setMoves(moves){
    this.moves = moves;
  }

  getMoves(){
    return this.moves;
  }
}
