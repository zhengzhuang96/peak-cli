#!/usr/bin/env node
const program = require('commander')
const create = require('../lib/create')
const add = require('../lib/add')
const packageInfo = require('../package.json')

program
.version(packageInfo.version)
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