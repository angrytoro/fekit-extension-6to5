// Generated by CoffeeScript 1.9.1
(function() {
  var _spawn, chokidar, path, process_stdio, spawn, watcher;

  path = require('path');

  chokidar = require('chokidar');

  spawn = require('child_process').spawn;

  watcher = chokidar.watch('es6', {
    cwd: '.'
  });

  watcher.on('all', function(event, filepath) {
    var traceur;
    console.log(event, filepath);
    traceur = _spawn(path.join('.', 'node_modules', '.bin', 'traceur'), ['--dir', 'es6', 'src']);
    return process_stdio(traceur);
  });

  _spawn = function(cmd, args, options) {
    if (args == null) {
      args = [];
    }
    if (options == null) {
      options = {};
    }
    cmd = process.platform === 'win32' ? cmd + '.cmd' : cmd;
    return spawn(cmd, args, options);
  };

  process_stdio = function(proc, callback) {
    proc.stderr.pipe(process.stderr, {
      end: false
    });
    proc.stdout.pipe(process.stdout, {
      end: false
    });
    return proc.on('exit', function(code) {
      if (code === 0) {
        return typeof callback === "function" ? callback() : void 0;
      }
    });
  };

}).call(this);
