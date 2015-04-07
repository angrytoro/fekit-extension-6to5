path = require 'path'

{spawn} = require 'child_process'
{exec} = require 'child_process'

_spawn = (cmd, args = [], options = {}) ->
	cmd = if process.platform is 'win32' then cmd + '.cmd' else cmd
	spawn cmd, args, options
process_stdio = (proc, callback) ->
	proc.stderr.pipe process.stderr, end: false
	proc.stdout.pipe process.stdout, end: false
	proc.on 'exit', (code) ->
		callback?() if code is 0

build = (option, callback) -> 

	coffee = _spawn path.join('.', 'node_modules', '.bin', 'coffee'), option
	process_stdio coffee, callback

task 'build', 'build coffee-script to javascript', ->
	build ['-c', '-o', '.', '.']