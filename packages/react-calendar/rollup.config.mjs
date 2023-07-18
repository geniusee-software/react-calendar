import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.tsx",
  output: {
    file: "dist/calendar.js",
    format: "umd",
    name: "calendar",
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
  external: ["react", "react-dom"],
};
