var crypto = require('crypto'),
    walk = require('walk-tree-as-promised');

module.exports = hashTree;
function hashTree(folder, options) {
  return walk(folder, {
    sync: (options && options.sync) || false,
    processDirectory: function(baseDir, relativePath, stat, entries, callback) {
      callback(null, relativePath + entries.join('\x00'));
    },
    processFile: function(baseDir, relativePath, stat, callback) {
      callback(null, [relativePath, stat.mode, stat.size, stat.mtime.getTime()].join('\x00'));
    },
    after: function(result, callback) {
      callback(null, crypto.createHash('sha1').update(result).digest('hex'));
    }
  });
}