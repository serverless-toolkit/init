# ${projectName}

## Setup and Development

> Note the [Prerequisites for the Serverless-Toolkit](#prerequisites-for-the-serverless-toolkit)

**Prepare the AWS environment**

```sh
npm run bootstrap
```

**Sync files to AWS**

```sh
npm run sync
```

**Develop and preview**

[https://${projectName}.${domainName}](https://${projectName}.${domainName})

### Development

**Local development with file sync and test execution**

```sh
npm start
npm run dev
```

**Run tests locally**

```sh
npm test
```

## Destroy the AWS environment

```sh
npm run destroy
```

## Prerequisites for the Serverless-Toolkit

### Prepare you AWS account and the AWS CLI

```sh
aws configure
```

### Prepare AWS-CDK

#### Install

```sh
npm install -g aws-cdk
```

#### Bootstrapping AWS-CDK

```sh
cdk bootstrap aws://ACCOUNT-NUMBER/REGION
```

## Clone this template

```
npx degit @serverless-toolkit/init
```
