`hashTree(folder, [options])` computes the sha1 hash of all the files and folders in the given directory. For computing the hash, it takes the timestamp, size, location and mode of the files into account. This function is intended for detecting file changes.

# Usage
``` JavaScript
var hashTree = require('hash-tree-as-promised');

hashTree(__dirname)
.then(function(hash) {
  // e.g. hash == '976e78c429a0f5cb481ebcec65c355e2878e94f2'
});
```

# Options
- `sync` Default: false. If you set `sync: true`, then the synchronous file API functions are used internally. This might be faster on Linux systems. However the function still returns a promise.
