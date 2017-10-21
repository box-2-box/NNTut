var Neuron = require('./Neuron');

function NeuronLayer(numNeurons, numInputs) {
  this.numNeurons = numNeurons;
  this.neuronList = [];
  for (let i=0; i<numNeurons; i++) {
    this.neuronList[i] = new Neuron(numInputs);
  }
}

NeuronLayer.prototype.toString = function() {
  for (let i=0; i<this.numNeurons; i++) {
    console.log(`\t---------------- Neuron ${i} ----------------`);
    this.neuronList[i].toString();
    console.log("\t------------------------------------------\n");
  }
};

module.exports = NeuronLayer;
