var hashTree = require('./hash-tree');
var crypto = require('crypto');

(function loop() {
  var start = Date.now();
  hashTree(__dirname + '/../')
  .then(function(hash) {
    console.log(hash);
    console.log('Hashing took ' + (Date.now() - start) + ' ms');
  })
  .then(loop);
})();