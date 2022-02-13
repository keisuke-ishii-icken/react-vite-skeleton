# skeleton project

## Objective

Skeleton project for Frontend module(typescript, vite, react(router, redux), storybook)


## Feature

* import by absolute path
* some eslint rules
* source and test file in same dir
* using npm(not yarn) because of affinity for some library or environment.


## How to use

* download this repository as zip
* rename project(grep 'react-vite-skeleton')
* modify LICENSE
* npm install
  * If you want use yarn, run `yarn import` & `yarn`
  

## TODO

* containernize



## install log

### prepare

```
nodenv update; cat .node-version | nodenv install
```


### initialize vite

```
npm init vite
✔ Project name: … something
✔ Select a framework: › react
✔ Select a variant: › react-ts


Done. Now run:

  cd something
  npm install
  npm run dev



npm install
```

### modify config
* tsconfig.json
* vite.config.ts


### storybook

```
npx sb@next init --builder storybook-builder-vite
npm run storybook
```

### modify config
* .storybook/main.js

### eslint

```
npm install eslint --save-dev
npm init @eslint/config

✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · google
✔ What format do you want your config file to be in? · JavaScript
```

```
npm install --save-dev eslint-plugin-import 
npm install -D eslint-import-resolver-typescript eslint-import-resolver-alias
```

### modify config
* .eslintignore
* .eslintrc.js

### redux

```
npm install redux react-redux
```


### jest

```
npm i jest @types/jest ts-jest -D
```

### modify config
* jest.config.js
* package.json
