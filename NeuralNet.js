var NeuronLayer = require('./NeuronLayer');

const bias = -1.0;
const activationResponse = 1.0;

function NeuralNet(numInputs, numOutputs, numHiddenLayers, neuronsPerHiddenLayer) {
  this.numInputs = numInputs;
  this.numOutputs = numOutputs;
  this.numHiddenLayers = numHiddenLayers;
  this.neuronsPerHiddenLayer = neuronsPerHiddenLayer;
  this.layers = [];

  // if there are hidden layers
  if (this.numHiddenLayers > 0) {

    // hidden layer 1
    this.layers.push(new NeuronLayer(this.neuronsPerHiddenLayer, this.numInputs));
    // other hidden layers
    for (let i=1; i<this.numHiddenLayers; i++) {
      this.layers.push(new NeuronLayer(this.neuronsPerHiddenLayer, this.neuronsPerHiddenLayer));
    }
    // output layer
    this.layers.push(new NeuronLayer(this.numOutputs, this.neuronsPerHiddenLayer));

  // only one layer
  } else {
    this.layers.push(new NeuronLayer(this.numOutputs, this.numInputs));
  }
}


// get the total count of weights in the net
NeuralNet.prototype.numWeight = function() {
  var n = 0;

  for (let i=0; i<this.layers.length; i++) {
    for (let j=0; j<this.layers[i].neuronList.length; j++) {
      n += this.layers[i].neuronList[j].weights.length;
    }
  }

  return n;
}

// return an array of all weights in the net
NeuralNet.prototype.getWeights = function() {

  var weights = [];

  // each layer
  for (let i=0; i<this.layers.length; i++) {
    // each neuron
    for (let j=0; j<this.layers[i].neuronList.length; j++) {
      // each weight
      for (let k=0; k<this.layers[i].neuronList[j].weights.length; k++) {
        weights.push(this.layers[i].neuronList[j].weights[k]);
      }
    }
  }

  return weights;
}


// update all the weights in the net
NeuralNet.prototype.putWeights = function(weights) {
  //var net = JSON.parse(weights);

  var index = 0;

  // each layer
  for (let i=0; i<this.layers.length; i++) {
    // each neuron
    for (let j=0; j<this.layers[i].neuronList.length; j++) {
      // each weight
      for (let k=0; k<this.layers[i].neuronList[j].weights.length; k++) {
        this.layers[i].neuronList[j].weights[k] = weights[index];
        index++;
      }
    }
  }
}


// pass inputs to net and get outputs
NeuralNet.prototype.update = function(inputs) {

  var outputs = [];

  if (inputs.length == this.numInputs) {

    // For each layer
    for (let i=0; i<this.layers.length; i++) {

      // outputs of previous layer used as inputs for next layer
      if (i>0) {
        for (let x = 0; x < outputs.length; x++) {
          inputs[x] = outputs[x];
        }
      }

      // clear previous values from the output array
      outputs = [];

      var netInput = 0;
      // For each neuron
      for (let j=0; j<this.layers[i].numNeurons; j++) {
        netInput = 0;
        var numInputs = this.layers[i].neuronList[j].numInputs;

        // For each weight (use < numInputs because bias is added to summation in next step)
        for (let k=0; k<numInputs; k++) {
          netInput += this.layers[i].neuronList[j].weights[k] * inputs[k];
        }

        // add in the bias
        netInput += this.layers[i].neuronList[j].weights[numInputs] * bias;

        // store the outputs for this layer (will become the inputs for the next layer if there is one)
        outputs.push(sigmoid(netInput, activationResponse));
      }
    }
  }

  return outputs;
}

function sigmoid(activation, response) {
    return 1 / (1 + Math.pow( Math.E, ( -(activation)/response) ) );
}


module.exports = NeuralNet;
