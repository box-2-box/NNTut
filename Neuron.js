var rand = require('random-seed').create();

function Neuron(numInputs) {
  this.numInputs = numInputs;
  this.weights = [];
  for (let i=0; i<numInputs+1; i++) {
    this.weights[i] = rand.floatBetween(-1,1);
  }
}

module.exports = Neuron;
