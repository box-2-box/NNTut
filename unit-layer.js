var layer = require('./NeuronLayer');

var l;

function create() {
  l = new layer(10, 4);
}

function logLayer() {
  l.toString();
}

create();
logLayer();
