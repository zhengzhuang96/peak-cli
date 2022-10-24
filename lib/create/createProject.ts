/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-15 16:49:29
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-10-24 18:23:00
 * @Description: In User Settings Edit
 */
import { log } from "../utils/console";
const ora = require('ora');
const download = require("download-git-repo");

/**
 * @description: 创建项目
 * @param {*} any
 */
const createProject = async (title: string, name: string): Promise<any> => {
  return new Promise((resolve, reject) => {

    // 获取模版文件路径
    // let templateRoot = join(templateUrl, `mvc-cli-project-${title}`);
    // log(`获取模版文件路径${templateRoot}`)

    // // 校验模版文件路径, 如果目录存在返回true, 如果目录不存在返回false
    // if (!existsSync(templateRoot)) {
    //   log(chalk.red(`未找到模版文件, 请检查当前文件目录是否正确, path: ${templateRoot}`));
    //   return;
    // }

    let repo;
    switch (title) {
      case 'taro':
        repo = `github:zhengzhuang96/taro-react#main`
        break;
      case 'react-admin':
        repo = `git@github.com:zhengzhuang96/react-admin-project-template.git#master`
        break;
      default:
        break;
    }

    const process = ora(`🚕 正在创建 ${title} 项目模版...\n`)

    // 显示进度条
    process.start()

    // 下载模版文件
    download(
      repo,
      name,
      { clone: true },
      async function (err: any) {
        log(err ? `Error: ${err}` : "Success");
        if (err) {
          process.fail(`🚕 下载失败: ${err}`)
          resolve(false)
        } else {
          process.succeed(`🚕 下载成功`)

          // 根据name获取运行指令
          resolve(true)
        }
      }
    )
  })
}

export default createProject;