class Bird {
  fly() {
    console.log("Bird is flying");
  }

  makeSound() {}
}

class Sparrow extends Bird {
  fly() {
    console.log("Sparrow is flying");
  }

  makeSound() {
    console.log("Chirp Chirp");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguin can't fly");
  }

  makeSound() {
    console.log("Penguin sound");
  }
}

function makeBirdFly(bird: Bird) {
  bird.fly();
}

makeBirdFly(new Sparrow());
