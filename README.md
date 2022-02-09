# skeleton project


* typescript, vite, react, storybook, router  
TODO: redux, jest  
TODO: containernize
* import by absolute path
* some eslint rules


## prepare

```
nodenv update; cat .node-version | nodenv install
```


## initialize vite

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


## storybook

```
npx sb@next init --builder storybook-builder-vite
npm run storybook

```


## eslint

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

## jest

```


```
