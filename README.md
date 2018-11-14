使用next.js构建

1. 包含手脚架的基本功能: 集成webpack, es6/7, css-in-js (styled-jsx), dev/build/prod配置
2. 可以方便的挑选希望集成的工具 https://github.com/zeit/next.js/blob/canary/examples
3. out-of-box SSR

集成redux进行状态管理 https://github.com/zeit/next.js/tree/canary/examples/with-redux

集成ts/jest https://github.com/zeit/next.js/tree/canary/examples/with-jest-typescript

集成reactstrap 使用bootstrap风格的button/modal/input等组件

使用ducks style的文件组织形式

首页用来提示设计/使用方式

进入首页后生成一个随机id, 按钮跳转到doc/{id}页面, 后续根据此id生成url和qrcode (展示router的使用)

弹框内的内容在modules目录下, 作为一个和redux绑定的smart container

pages/doc/index 是页面的入口, 本身是一个stateless function, 使用recomopose增加了open状态, 用来控制是否打开弹框
