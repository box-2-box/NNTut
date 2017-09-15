var NN = require('./NeuralNet');

var net;

function create() {
  net = new NN(2,1,1,3);
}

function logNet()
{

  console.log(`=================== Inputs ===============================`);
  console.log(`\t -- ${net.numInputs} --`);
  console.log(`===========================================================`);

  for (let i=0; i<net.layers.length; i++) {
    var l = "Hidden";
    if (i==net.layers.length-1) l = "Output";

    console.log(`=================== ${l} Layer ${i} ========================\n`);
    net.layers[i].toString();
    console.log(`===========================================================`);
  }
}

function update(data) {
  //logNet();
  console.log(`${data} =>`);
  var output = net.update(data);
  console.log(output);
}

function testWeights() {
  var weights = net.getWeights();
  console.log(weights);

  // var obj = JSON.parse(weights);

  // for (let i=0; i<obj.layers.length; i++) {
  //   for (let j=0; j<obj.layers[i].neuronList.length; j++) {
  //     for (let k=0; k<obj.layers[i].neuronList[j].weights.length; k++) {
  //       obj.layers[i].neuronList[j].weights[k] = 0;
  //     }
  //   }
  // }

  for (let i=0; i<weights.length; i++) {
    weights[i] = 0;
  }

  net.putWeights(weights);

  var n = net.getWeights()
  console.log(n);
  console.log(n.length);
  console.log(net.numWeight());
}


create();
// testWeights();
logNet();
update( [0,0] );
update( [0,1] );
update( [1,0] );
update( [1,1] );
