使用next.js构建

1. 包含手脚架的基本功能: 集成webpack, es6/7, css-in-js (styled-jsx), dev/build/prod配置
2. 可以方便的挑选希望集成的工具 https://github.com/zeit/next.js/blob/canary/examples
3. out-of-box SSR

集成redux进行状态管理 https://github.com/zeit/next.js/tree/canary/examples/with-redux

集成ts/jest https://github.com/zeit/next.js/tree/canary/examples/with-jest-typescript

集成reactstrap 使用bootstrap风格的button/modal/input等组件

集成babel-plugin-root-import, 以便使用绝对路径
import SomeExample from '../../../some/example.js';
 
import SomeExample from '~/some/example.js';

