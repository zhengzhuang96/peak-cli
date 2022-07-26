/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-15 15:05:45
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-26 11:20:57
 * @Description: In User Settings Edit
 */
import { Command } from 'commander'
import create from '../lib/create';
import packageInfo from "../package.json";

const program = new Command();

program
  .version(packageInfo.version)
  .command("create")
  .description("创建新的项目")
  .action(() => {
    create()
  });

program.parse();