#!/usr/bin/env node
const setCommander = program => {
    program
      .command('inc')
      .description('increase version in package.json')
      .action(() => {
        require('./script/inc')()
      })
  }
  
  module.exports = setCommander
  