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
}

class AbstractAction {
  constructor(){
    if(new.target === AbstractAction){
      throw new TypeError("Cannot construct abstract instance: AbstractAction");
    }
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
