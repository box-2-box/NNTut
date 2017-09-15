var NeuronLayer = require('./NeuronLayer');

function NeuralNet() {

  this.inputs = 4;
  this.outputs = 2;
  this.hiddenLayers = 2;
  this.neronsPerHiddenLayer = 10;
  this.hiddenLayerList = [];
  
  for (let i=0; i<this.hiddenLayers; i++) {
    this.hiddenLayerList[i] = new NeuronLayer(this.neronsPerHiddenLayer, this.neronsPerHiddenLayer);
  }
}

NeuralNet.prototype.getNumberOfWeights = function() {

}

NeuralNet.prototype.getWeights = function() {

}

NeuralNet.prototype.putWeights = function(weights) {

}

NeuralNet.prototype.update = function(inputs) {

}

NeuralNet.prototype.sigmoid = function(activation, response) {

}


module.exports = NeuralNet;
