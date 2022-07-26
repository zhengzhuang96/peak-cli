/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-25 17:03:54
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-26 15:50:09
 * @Description: In User Settings Edit
 */

import chalk from "chalk";
import { log } from "../utils/console";

/**
 * @description: 根据name获取运行指令
 * @param {string} title
 * @param {string} name
 */
export const getCommand = (nodeInstall: string, title: string, name: string) => {
  const command = `${title}`;
  switch (title) {
    case 'taro':
      log(`\r\n成功创建了项目 ${chalk.green(name)}`)
      log(`\r\n  cd ${chalk.green(name)}`)
      const commandTaro = nodeInstall === 'yarn' ? 'yarn' : `${nodeInstall} run`
      log(`  ${chalk.green(`${commandTaro} dev:weapp`)}\r\n`)
      break;
    default:
      break;
  }
  return command;
}