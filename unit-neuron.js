var Neuron = require('./Neuron');

var n;

function create() {
  n = new Neuron(4);
}

function logNeuron() {
  n.toString();
}

create();
logNeuron();
