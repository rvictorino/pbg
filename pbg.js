class Pbg {
  constructor() {
    this.actions = [];
    //create canvas
    if(arguments.length > 0){
      this.setCanvas(arguments[0]);
    } else {
      var canvas = document.createElement("canvas");
      canvas.setAttribute("id", "canvas_id");
      this.setCanvas(canvas);
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
  setCanvas(canvas) {
    if(typeof fabric !== 'undefined'){
      this.canvas = new fabric.Canvas(canvas);
    } else {
      throw new ReferenceError("fabric is not defined. Did you include fabric.js ?");
    }
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
  constructor(){
    this.avatar = new Image(300,300);
    this.name = "";
    this.health = 10;
    this.maxHealth = 10;
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


}
