path = require 'path'
chokidar = require 'chokidar'
{spawn} = require 'child_process'
babel = require 'babel/register'

exports.usage = '将es6编译成es5'

exports.set_options = (optimist) -> 
	optimist.alias 'g', 'google'
	optimist.describe 'g', '按谷歌的编译方式，将es6编译成es5'
	optimist.alias 'b', 'label'
	optimist.describe 'b', '按babel的编译方式，将es6编译成es5'


watcher = chokidar.watch 'es6', {cwd: '.'}

watcher.on 'all', (event, filepath) -> 
	console.log event, filepath;
	traceur = _spawn path.join('.', 'node_modules', '.bin', 'traceur'), ['--dir', 'es6', 'gsrc']
	process_stdio traceur
	babel = _spawn path.join('.', 'node_modules', '.bin', 'babel'), ['es6', '--out-dir', 'bsrc']
	process_stdio babel

_spawn = (cmd, args = [], options = {}) ->
	cmd = if process.platform is 'win32' then cmd + '.cmd' else cmd
	spawn cmd, args, options

process_stdio = (proc, callback) ->
	proc.stderr.pipe process.stderr, end: false
	proc.stdout.pipe process.stdout, end: false
	proc.on 'exit', (code) ->
		callback?() if code is 0