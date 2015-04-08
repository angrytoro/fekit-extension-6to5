path = require 'path'
chokidar = require 'chokidar'
{spawn} = require 'child_process'

watcher = chokidar.watch 'es6', {cwd: '.'}

watcher.on 'all', (event, filepath) -> 
	console.log event, filepath;
	traceur = _spawn path.join('.', 'node_modules', '.bin', 'traceur'), ['--dir', 'es6', 'src']
	process_stdio traceur

_spawn = (cmd, args = [], options = {}) ->
	cmd = if process.platform is 'win32' then cmd + '.cmd' else cmd
	spawn cmd, args, options

process_stdio = (proc, callback) ->
	proc.stderr.pipe process.stderr, end: false
	proc.stdout.pipe process.stdout, end: false
	proc.on 'exit', (code) ->
		callback?() if code is 0