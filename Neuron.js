var rand = require('random-seed').create();

function Neuron(numInputs) {
  this.numInputs = numInputs;
  this.weights = [];

  // Add one extra nueron for the bias
  for (let i=0; i<=numInputs; i++) {
    this.weights[i] = rand.floatBetween(-1,1);
    // this.weights[i] = 0.5;
  }
}

Neuron.prototype.toString = function() {
  var text = "[";
  for (let i=0; i<this.numInputs; i++) {
    text += "W" + i + ":" + this.weights[i].toFixed(2) + ", ";
  }
  text += "B:" + this.weights[this.numInputs].toFixed(2);
  console.log(`\t ${text} ]`);
}

module.exports = Neuron;
