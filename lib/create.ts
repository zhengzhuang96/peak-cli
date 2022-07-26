/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-15 15:07:55
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-26 16:06:49
 * @Description: In User Settings Edit
 */
import chalk from "chalk";
import { textSync } from "figlet";
import { clearConsole, log } from "./utils/console";
import interactivity from "./create/interactivity";
import createProject from "./create/createProject";
import modifyPackage from "./create/modifyPackage";
import { getCommand } from "./create/getCommand";
import { spawnInstall } from "./utils/spawnInstall";
import packageInfo from "../package.json";

const create = async () => {
  // 清空控制台
  clearConsole()

  log(chalk.yellow(textSync('peak-cli', { horizontalLayout: 'full' })));
  log(`🗼 peak-cli v${packageInfo.version}`);
  log('');
  log(chalk.green('peak-cli 即将创建一个新项目!'));
  log('需要帮助? 请在 https://github.com/zhengzhuang96/peak-cli 提交issue');
  log('');

  // 弹出交互提示语并获取用户的选择
  const { project, description, typeProject, nodeInstall } = await interactivity();

  // 项目创建
  await createProject(typeProject, project)

  // 修改package.json
  await modifyPackage(project, description);

  // 给项目自动安装依赖项
  await spawnInstall(nodeInstall, project);

  // 根据name提示用户运行指令
  getCommand(nodeInstall, typeProject, project);
}

export default create;