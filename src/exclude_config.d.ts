declare module "*.json" {
  const excludeConfig: {
    root: [string];
    node_modules: [string];
  };
  export = excludeConfig;
}