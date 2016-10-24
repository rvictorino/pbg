class Pbg {
  constructor() {
    this.actions = [];
  }

  addAction(action) {
    if(action instanceof AbstractAction){
      this.actions.push(action);
    } else {
      throw new TypeError("Bad type given: AbstractAction expected, " + typeof action  + " given");
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
  constructor() {
    super();

  }
}
