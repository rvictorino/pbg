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

  play(){
    this.actions.forEach(function(action){
      action.play();
    });
  }
}

class AbstractAction {
  constructor(canvas){
    if(new.target === AbstractAction){
      throw new TypeError("Cannot construct abstract instance: AbstractAction");
    }
    this.canvas = canvas;
  }
  play(){}
}

class IntroAction extends AbstractAction {
  constructor(c){
    super(c);
    this.player = new fabric.Image.fromURL('images/player.png');
  }
  play(){
    this.init();
  }
  init(){
    this.canvas.add(this.player);
  }
}


class TextAction extends AbstractAction {
    constructor(c) {
      super(c);
      this.fullText = "HEYYY";

    }

    play(){
      //var words = this.fullText.split(" ");
      /*for each(word in words){

      }*/
      var canvas = this.canvas;
      for(var i=0;i<15;i++){
        fabric.Image.fromURL("sprites/letter/a.png", function(img) {
          img.scaleToWidth(25);
          canvas.add(img).renderAll();
        },{
          left: 30*i,
        });
      }


    }

    getImagePathFromChar(char){
      switch (char) {
          case "a":
            return 'sprites/letter_min/a.png';
          case "b":
            return 'sprites/letter_min/b.png';
          case "c":
            return 'sprites/letter_min/c.png';
          case "d":
            return 'sprites/letter_min/d.png';
          case "e":
            return 'sprites/letter_min/e.png';
          case "f":
            return 'sprites/letter_min/f.png';
          case "g":
            return 'sprites/letter_min/g.png';
          case "h":
            return 'sprites/letter_min/h.png';
          case "i":
            return 'sprites/letter_min/i.png';
          case "j":
            return 'sprites/letter_min/j.png';
          case "k":
            return 'sprites/letter_min/k.png';
          case "l":
            return 'sprites/letter_min/l.png';
          case "m":
            return 'sprites/letter_min/m.png';
          case "n":
            return 'sprites/letter_min/n.png';
          case "o":
            return 'sprites/letter_min/o.png';
          case "p":
            return 'sprites/letter_min/p.png';
          case "q":
            return 'sprites/letter_min/q.png';
          case "r":
            return 'sprites/letter_min/r.png';
          case "s":
            return 'sprites/letter_min/s.png';
          case "t":
            return 'sprites/letter_min/t.png';
          case "u":
            return 'sprites/letter_min/u.png';
          case "v":
            return 'sprites/letter_min/v.png';
          case "w":
            return 'sprites/letter_min/w.png';
          case "x":
            return 'sprites/letter_min/x.png';
          case "y":
            return 'sprites/letter_min/y.png';
          case "z":
            return 'sprites/letter_min/z.png';
          case "A":
            return 'sprites/letter/a.png';
          case "B":
            return 'sprites/letter/b.png';
          case "C":
            return 'sprites/letter/c.png';
          case "D":
            return 'sprites/letter/d.png';
          case "E":
            return 'sprites/letter/e.png';
          case "F":
            return 'sprites/letter/f.png';
          case "G":
            return 'sprites/letter/g.png';
          case "H":
            return 'sprites/letter/h.png';
          case "I":
            return 'sprites/letter/i.png';
          case "J":
            return 'sprites/letter/j.png';
          case "K":
            return 'sprites/letter/k.png';
          case "L":
            return 'sprites/letter/l.png';
          case "M":
            return 'sprites/letter/m.png';
          case "N":
            return 'sprites/letter/n.png';
          case "O":
            return 'sprites/letter/o.png';
          case "P":
            return 'sprites/letter/p.png';
          case "Q":
            return 'sprites/letter/q.png';
          case "R":
            return 'sprites/letter/r.png';
          case "S":
            return 'sprites/letter/s.png';
          case "T":
            return 'sprites/letter/t.png';
          case "U":
            return 'sprites/letter/u.png';
          case "V":
            return 'sprites/letter/v.png';
          case "W":
            return 'sprites/letter/w.png';
          case "X":
            return 'sprites/letter/x.png';
          case "Y":
            return 'sprites/letter/y.png';
          case "Z":
            return 'sprites/letter/z.png';
          case ".":
            return 'sprites/letter/period.png';
          case ",":
            return 'sprites/letter/comma.png';
          case ":":
            return 'sprites/letter/colon.png';
          case ";":
            return 'sprites/letter/semicolon.png';
          case "(":
            return 'sprites/letter/(.png';
          case ")":
            return 'sprites/letter/).png';
          case "-":
            return 'sprites/letter/-.png';
          case "[":
            return 'sprites/letter/[.png';
          case "]":
            return 'sprites/letter/].png';
          case "!":
            return 'sprites/letter/!.png';
          case "/":
            return 'sprites/letter/slash.png';
          case " ":
            return 'sprites/letter/space.png';
          case "§":
            return 'sprites/letter/pk.png';
          case "%":
            return 'sprites/letter/mn.png';
          case "*":
            return 'sprites/letter/ok.png';
          case "=":
            return 'sprites/letter/male.png';
          case "+":
            return 'sprites/letter/female.png';
          default:
            return 'sprites/letter/?.png';
        }
    }
}

class AttackAction extends AbstractAction {
  constructor(c) {
    super(c);
  }
}

class UseObjectAction extends AbstractAction {
  constructor(c) {
    super(c);

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
