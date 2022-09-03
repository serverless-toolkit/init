const { App } = require("aws-cdk-lib");
const {
  ServerlessToolkitStack,
  env: environment,
} = require("@serverless-toolkit/cli/stacks");

const projectName = environment.PROJECTNAME;
const domainName = environment.DOMAINNAME;
const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

const {
  pageHandler,
  sagaHandler,
  workerHandler,
  zone,
  codeBucket,
  table,
  httpApi,
  websocketApi,
} = new ServerlessToolkitStack(app, `${projectName}-stk-stack`, {
  projectName,
  domainName,
  environment,
  env,
});
