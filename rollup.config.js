import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import terser from "@rollup/plugin-terser";
import serve from "rollup-plugin-serve";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: !production,
      },
      emitCss: false,
    }),

    // Resolve dependencies from npm
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),

    // Serve the public directory
    !production &&
      serve({
        contentBase: "public",
        historyApiFallback: true,
        port: 8080,
      }),

    // Enable live reloading
    !production && livereload("public"),

    // Minify for production
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
