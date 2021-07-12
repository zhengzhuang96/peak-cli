#!/usr/bin/env node
const program = require('commander')
const create = require('../lib/create')
const add = require('../lib/add')

program
.version('0.0.3')
.command('create <name>')
.description('创建新的项目')
.action(name => { 
    create(name)
})

program
.command('add <name>')
.description('add a plugin')
.action(name => { 
    add(name)
})


program.parse()