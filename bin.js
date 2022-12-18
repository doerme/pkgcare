#!/usr/bin/env node

const program = require('commander')
const packageObj = require('./package.json')
const setCommander = require('./cli')

setCommander(program)
program.version(packageObj.version, '-v, --version').usage('<command> [options]')
program.parse(process.argv)

module.exports = setCommander
