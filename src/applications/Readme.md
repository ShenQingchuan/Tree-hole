# Applications - 应用

这里我设置了一种可扩展的基础机制，以应用为等级划分模块。

每一个应用都是独立的。（可以被按需加载）基本的目录结构如下：

```plaintext
├── applications
│   ├── anniversary
│   │   ├── index.tsx
│   │   └── styles.module.less
```

每一个文件夹最终是通过 `index.tsx` 导出一个 React 组件，并辅以 `styles.module.less` 作为该模块样式。
此外就是该应用的自有逻辑代码了。
