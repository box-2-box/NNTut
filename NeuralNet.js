var NeuronLayer = require('./NeuronLayer');

const bias = 1;
const activationResponse = 1;

function NeuralNet() {
  this.numInputs = 4;
  this.numOutputs = 2;
  this.numHiddenLayers = 2;
  this.neuronsPerHiddenLayer = 10;
  this.hiddenLayers = [];
  
  for (let i=0; i<this.hiddenLayers; i++) {
    this.hiddenLayers[i] = new NeuronLayer(this.neuronsPerHiddenLayer, this.neuronsPerHiddenLayer);
  }
}

NeuralNet.prototype.getNumberOfWeights = function() {

}

NeuralNet.prototype.getWeights = function() {

}

NeuralNet.prototype.putWeights = function(weights) {

}

NeuralNet.prototype.update = function(inputs) {

  var outputs = [];
  
  if (inputs.length == this.numInputs) {
     
    // For each layer
    for (let i=0; i<this.numHiddenLayers; i++) {
    
      if (i>0) {
        inputs = outputs; // function for copy?
      }
      
      // For each neuron
      for (let j=0; j<this.hiddenLayers.numNeurons; j++) {
        var netInput = 0;
        var numInputs = this.hiddenLayers[i].neurons[j].numInputs;
        
        // For each weight
        for (let k=0; numInputs; k++) {
          netInput += this.hiddenLayers[i].neurons[j].weights[k] * inputs[k];
        }
        
        // add in the bias
        netInput += this.hiddenLayers[i].neurons[j].weights[numInputs-1] * bias; 
        
        // store the outputs from each layer
        outputs.push(this.sigmoid(netInput, activationResponse));
      }
      
      outputs = [];
    }
  }
  
  return outputs;
}

NeuralNet.prototype.sigmoid = function(activation, response) {

}


module.exports = NeuralNet;
