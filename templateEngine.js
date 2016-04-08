var Transform = require('stream').Transform;
var inherits = require('util').inherits;

function templateEngine () {
  Transform.call(this);
}

inherits(templateEngine, Transform);

templateEngine.prototype._transform = function(chunk, enc, done){
  this.push(chunk.toString());
  done();
};



module.exports = templateEngine;