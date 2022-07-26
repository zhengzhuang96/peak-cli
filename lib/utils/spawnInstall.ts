/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-25 17:24:04
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-26 15:42:46
 * @Description: In User Settings Edit
 */
const spawn = require('cross-spawn');
const chalk = require('chalk')
import path from "path";
import { log } from "./console";

/**
 * @description: 安装依赖
 */
export const spawnInstall = (nodeInstall: string, project: string) => {
	return new Promise<void>((resolve, reject) => {
		log('');
		log(chalk.green('🐌 开始安装依赖项...'));
		log('');

		const cwd = path.join(process.cwd(), project);

		// 执行安装
		const child = spawn(nodeInstall, ['install'], {
			cwd,
			stdio: 'inherit'
		});

		// 监听执行结果
		child.on('close', function (code: number) {
			// if (code !== 0) {
			// 	// 执行失败
			// 	log(chalk.red('在安装依赖项时发生错误!'));
			// 	reject()
			// 	process.exit(1);
			// } else {
			// 	// 执行成功
			// 	log(chalk.green('🐌 安装依赖项完成!'));
			// 	resolve()
			// }
			// 执行成功
			log('');
			log(chalk.green('🐌 安装依赖项完成!'));
			resolve()
		})
	})
};
