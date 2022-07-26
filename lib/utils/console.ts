/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-15 15:07:59
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-15 16:42:42
 * @Description: In User Settings Edit
 */
import { cursorTo, clearScreenDown } from "readline";

/**
 * @Name: 清空控制台
 */
export const clearConsole = () => {
  //判断 Node.js 是否运行在一个 TTY(终端) 环境中
  // if (!process.stdout.isTTY) return
  const blank = '\n'.repeat(process.stdout.rows)
  console.log(blank)
  cursorTo(process.stdout, 0, 0)
  clearScreenDown(process.stdout)
}

/**
 * @Name: 简化console.log
 */
export const log = (title: string) => console.log(title)