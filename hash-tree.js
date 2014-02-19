var crypto = require('crypto');
    walk = require('./walk');

module.exports = hashTree;
function hashTree(folder) {
  return walk(folder, {
    processDirectory: function(baseDir, relativePath, stat, entries, callback) {
      callback(null, crypto.createHash('sha1').update(entries.join('\x00')).digest('hex'));
    },
    processFile: function(baseDir, relativePath, stat, callback) {
      callback(null, [relativePath, stat.mode, stat.size, stat.mtime.getTime()].join('\x00'));
    }
  });
}