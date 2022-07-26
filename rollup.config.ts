/*
 * @Author: {zhengzhuang}
 * @Date: 2022-07-14 18:09:28
 * @LastEditors: {zhengzhuang}
 * @LastEditTime: 2022-07-25 10:54:52
 * @Description: In User Settings Edit
 */
import typescript from "typescript";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import typescript2 from "rollup-plugin-typescript2";
import nodeResolve from "@rollup/plugin-node-resolve";
import { dependencies } from "./package.json";

const external = Object.keys(dependencies || "");
const globals = external.reduce((prev, current) => {
  const newPrev = prev;

  newPrev[current] = current;
  return newPrev;
}, {});

export default {
  input: "./bin/cli.ts",
  output: {
    file: "./dist/index.js",
    format: "cjs",
    banner: "#!/usr/bin/env node",
    globals,
  },
  external,
  plugins: [
    typescript2({
      exclude: "node_modules/**",
      useTsconfigDeclarationDir: true,
      typescript,
      tsconfig: "./tsconfig.json",
    }),
    json(),
    terser(),
    nodeResolve({
      preferBuiltins: true,
    }),
  ],
};
