/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-25 16:38:49
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-25 16:48:14
 * @Description: In User Settings Edit
 */
import { writeFileSync } from "fs";
import { join } from "path";

/**
 * @description: 修改package.json
 * @param {string} name
 * @param {string} description
 */
const modifyPackage = async (name: string, description: string) => {
  const packageJson = require(join(process.cwd(), name, 'package.json'));
  packageJson.name = name;
  packageJson.description = description;

  // 写入文件
  await writeFileSync(join(process.cwd(), name, 'package.json'), JSON.stringify(packageJson, null, 2));

  return true;
}


export default modifyPackage;