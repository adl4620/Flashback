var dog = {
  name: 'Fido',
  sound: 'Woof!!!',
  readCollar: function() {
    console.log(this.name);
  },
  speak: function() {
    console.log(this.sound);
  },
  speakAfterWait: function(timeInSeconds) {
    setTimeout(function() {
      dog.speak();
    }, timeInSeconds * 1000);
  }
};

dog.readCollar(); // prints 'Fido'
dog.speak(); // prints 'Woof!!!'
dog.speakAfterWait(1); // prints `Woof!!!`