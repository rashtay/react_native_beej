# React Native Beej

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used as a base to build your a mobile application (ios and android).

The starter kit provides with the modern tools for developer efficiency and debugging. The architecture has been configured observing the common patterns adopted by the react native community.

[comment]: <> ([![NPM Version][npm-image]][npm-url])

[comment]: <> ([![Build Status][travis-image]][travis-url])

[comment]: <> ([![Downloads Stats][npm-downloads]][npm-url])

## Getting Started

- [Usage](#usage)
- [Tools and Libraries](#tools-and-libraries)
- [State management and Folder structure](#state-management-and-folder-structure)
- [Path resolver](#path-resolver)
- [Global Types](#global-types)
- [Testing](#testing)
- [Debugging](#debugging)
- [Linting](#linting)
- [Release History](#release-history)
- [Contributing](#contributing)
- [Author](#author)
- [FAQ](#faq)
- [Support](#support)
- [License](#license)

## Usage

- Install [Node.js](https://nodejs.org/en/). Follow the installation steps for respective operating system from the [official documentation](https://nodejs.org/en/). Make sure you install the **LTS** version of Node.
- Refer to the [Environment Setup](https://reactnative.dev/docs/environment-setup) doc to set up react native on your system
- You can download the boilerplate in 2 ways:
  - Use it as a template by clicking `Use Template` green button which can be found on the top right corner next to the `Clone` dropdown on the repositories GitHub page
  - Clone the project - `git clone https://github.com/rashtay/react_native_beej.git <your project name>`. Remove the previous git history: - `rm -rf .git/`.
- Add the npm dependencies by running - `yarn install`
- Use [React Native Rename](https://github.com/junedomingo/react-native-rename) to update project name - `$ npx react-native-rename <newName>`
- Run `npx pod-install`. DO NOT run it before `yarn install`
- Start the packager with `npm start`to see everything seems to be working fine
- Remove the LICENSE file and the "License" section from the **README** if your project is not open source
- Update the existing README.md file with the content related to the app and app development.
- You can now create a new git repository for your project (using `git init`) and make the first commit.

## Tools and Libraries

The boilerplate has the following tools and libraries:

- [React Native](https://facebook.github.io/react-native/) to build your cross-platfotm mobile application
- [Easy peasy](https://easy-peasy.now.sh/) redux wrapper for state management
- [React Navigation](https://reactnavigation.org/) to handle routing and navigation in the app with a default splash screen and type definitions
- [Typescript](https://www.typescriptlang.org/) for type checking and then compiling the code to plain/vanilla JavaScript
- [Husky](https://www.npmjs.com/package/husky) to add precommit and prepush hooks
- [Lint Staged](https://www.npmjs.com/package/lint-staged) to lint the currently modified file
- [Prettier](https://prettier.io/), [TSLint](<[https://palantir.github.io/tslint/](https://palantir.github.io/tslint/)>) and [ESlint](https://eslint.org/) preconfigured for React Native
- [Reactotron](https://github.com/infinitered/reactotron) a desktop app for inspecting your React JS and React Native projects. macOS, Linux, and Windows.
- [React Native Config](https://github.com/luggit/react-native-config) for setting environment variables
- [React Native AsyncStorage](<[https://github.com/react-native-community/async-storage](https://github.com/react-native-community/async-storage)>) for storing data locally
- [React Native Extended Stylesheet](https://github.com/vitalets/react-native-extended-stylesheet) for styling your components. Refer the documents for the benefits. I haven't configured it as you can ditch this package and use a one that suits your need in case you don't like it.

## State management and Folder structure

I have added [easy peasy](https://easy-peasy.now.sh/) for state management. Easy Peasy provides you with an **intuitive** API to **quickly** and **easily** manage the state for your React application.

The boilerplate consists of the **easy-peasy** [Dummy Product App](https://codesandbox.io/s/easy-peasy-tutorial-listeners-rhni3) code refactored to work with react native. You can refer to the tutorials and understand what I have done in the existing app.

Based on the library, we have created the following folders:

- **services** - A service is typically a class with a narrow, well-defined purpose. It should do something specific and do it well. For example, your APIs should reside in this folder. You should be injecting services.
- **models** - A model definition is an object based structure describing the state and behaviour ([actions](https://easy-peasy.now.sh/docs/api/action.html) etc) of your [store](https://easy-peasy.now.sh/docs/api/store.html). It can be as deep as you like, and can be split across multiple files, allowing you to import and compose your model as you please. All your model definition would reside in this folder.
- **containers** - The business logic should reside in a container and the data generated from this logic should be passed to the component from here. They are also known as smart components. All your smart components should reside it in this folder.
- **components** - A **component** is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a **element** that describes how a section of the UI (User Interface) should appear. They do not care about the business logic and are known as the dumb component. Their job as a module is to perform
- **hooks** - Folder to keep all your custom hooks
- **utils** - Folder to keep all your project utility/helper functions

## Path resolver

- Let's say you have `product.js` file in `src/components/product/` and you want to import `utils/string.js`.
- So, instead of importing the file present in like `../../utils/string.js`, you can either import it like `@utils/string` or `utils/string`.
- All the aliases can be found in `babel.config.js` and `tsconfig.json`.
- If you want to add/remove aliases, make sure you add/remove to/from both the files

## Global types

- We have a types folder placed in the root. It consists of the globals types being used across the project and third part module declarations that currently doesn't have typescript support.
- Typescript (using `tsconfig.json`) has been configured to identify these global types.

## Testing

- Refer to [Easy Peasy Testing](https://easy-peasy.now.sh/docs/testing/) for testing easy-peasy implementation.

## Debugging

- [Reactotron](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) has been added for debugging the application. Download [Reactotron](https://github.com/infinitered/reactotron/blob/master/docs/installing.md). If are using an Android device or emulator run the following command to make sure it can connect to Reactotron:

```
adb reverse tcp:9090 tcp:9090
```

- To log data to the Reactotron console, use `tronlog`. **PLEASE NOTE**, your project should not consist of any `tronlog`. Use it to log the values, review it and remove it from the code. You'd see an error if you don't remove it.
- You can benchmark functions to find bottleneck. Follow [benchmark](https://github.com/infinitered/reactotron/blob/master/docs/plugin-benchmark.md) guide. The plugin has already been configured.
- Refer to the official documentation for [debugging react native application](https://reactnative.dev/docs/debugging)

## Linting

The project comes preconfigured with `eslint` and `prettier` . I've added support for `react`, `typescript` and `airbnb`'s proposal for typescript eslint. I have listed the additional packages being used for linting:

- eslint-plugin-react
- eslint-plugin-import
- eslint-plugin-jsx-a11y
- @typescript-eslint/eslint-plugin
- eslint-config-airbnb-typescript
- eslint-config-prettier

The eslint, prettier and typescript configuration files have been updated to accomodate the additional plugins.

I have made sure you cannot the code if there are any lint or [type check](https://github.com/okonet/lint-staged/issues/468#issuecomment-605102567) issues.
