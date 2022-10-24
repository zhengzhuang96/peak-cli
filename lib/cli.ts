/*
 * @Author: {zhengzhuang}
 * @Date: 2022-10-24 18:24:39
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-10-24 18:27:16
 * @Description:
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