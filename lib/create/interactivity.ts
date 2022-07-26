/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-15 16:09:24
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-25 17:22:43
 * @Description: In User Settings Edit
 */
import { existsSync } from "fs-extra";
import { prompt } from "inquirer";
import { join } from "path";
import chalk from "chalk";

interface IInteractivity {
  project: string;
  description: string;
  typeProject: string;
  nodeInstall: string;
}

/**
 * @description: 获取交互式的输入
 */
const interactivity = async (): Promise<IInteractivity> => {
  const promptList: any = [
    {
      type: 'input',
      name: 'project',
      message: '请输入项目名称',
      validate: async (val: any) => {
        // 判断是否输入项目名称
        if (!val) return '请输入项目名称';

        // 判断文件夹是否存在
        const targetDir = join(process.cwd(), val);
        if (existsSync(targetDir)) {
          return `目标目录 ${chalk.cyan(targetDir)} 已经存在，请换一个项目名！`;
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'description',
      message: '请输入项目介绍',
    },
    {
      type: 'list',
      name: 'nodeInstall',
      message: '使用那种方式构建项目?',
      default: 'yarn',
      choices: [
        { name: 'yarn', value: 'yarn' },
        { name: 'pnpm', value: 'pnpm' },
        { name: 'npm', value: 'npm' },
      ]
    },
    {
      type: 'list',
      name: 'typeProject',
      message: '项目类型',
      default: 'vue',
      choices: [
        // { name: 'react', value: 'react' },
        // { name: 'vue3', value: 'vue3' },
        // { name: 'vue2', value: 'vue2' },
        // { name: 'flutter', value: 'flutter' },
        { name: 'taro', value: 'taro' },
      ]
    }
  ];
  const { project, description, typeProject, nodeInstall } = await prompt(promptList);
  return {
    project,
    description,
    typeProject,
    nodeInstall
  }
}

export default interactivity;