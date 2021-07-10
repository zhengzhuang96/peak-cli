/*
 * @Author: zhengzhuang
 * @Date: 2021-07-10 15:26:11
 * @LastEditors: zhengzhuang
 * @LastEditTime: 2021-07-10 16:50:32
 * @Description: In User Settings Edit
 * @FilePath: /peak-cli/bin/mvc.js
 */
const program = require('commander')
const create = require('../lib/create')
const add = require('../lib/add')

program
.version('0.0.1')
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