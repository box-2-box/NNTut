var Neuron = require("./Neuron);

function NeuronLayer(numNeurons, numInputs) {
  this.Nuerons = numNuerons;
  this.NeuronList[];
  for (let i=0; i<numNeurons; i++) {
    this.NeuronList = new Neuron(numInputs); 
  }
}

module.exports = NeuronLayer;
