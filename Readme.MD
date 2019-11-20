


## Develop

### Link plugin to npm global

```
$ npm link
/Users/andras/.nvm/versions/node/v10.16.0/lib/node_modules/serverless-plugin-node-modules-exclude -> /Users/andras/work/helyes/serverless-plugin-node-modules-exclude

ls -l /Users/andras/.nvm/versions/node/v10.16.0/lib/node_modules/
total 0
...
lrwxr-xr-x   1 andras  staff   64  8 Sep 11:18 serverless-plugin-node-modules-exclude -> /Users/andras/work/helyes/serverless-plugin-node-modules-exclude
...
```

### Link global module to project that depends on it

```
$ cd project_folder
$ npm link serverless-plugin-node-modules-exclude
/Users/andras/work/helyes/aws-lambda/shiftcare-notification-email-service/node_modules/serverless-plugin-node-modules-exclude -> /Users/andras/.nvm/versions/node/v10.16.0/lib/node_modules/serverless-plugin-node-modules-exclude -> /Users/andras/work/helyes/serverless-plugin-node-modules-exclude
```

For more details about linking node dependencies go to https://cultof.net/understanding-npm-link-how-to-develop-npm-modules


