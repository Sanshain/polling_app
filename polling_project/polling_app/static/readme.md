# preact-rollup bolilerplate



## Features: 

- Usage styled components via [`goober`](https://www.npmjs.com/package/goober) with minimal runtime (look [`App.jsx`](https://github.com/Sanshain/preact-boilerplate/blob/main/source/App.jsx)) 
- Isolated styles via postcss modules (like `react-css-modules`)
- Typescript out of the box (`ts-config` branch)
- `preact-routers` out of the box
- prerender out of the box

- Created on Preact 10.* + Rollup 2.* + Babel 7 template for SPAs.

## Setup

1. Clone the repo
```sh
git clone https://github.com/Sanshain/preact-boilerplate.git && cd project-templates
```

2. Install the deps
```sh
npm i
```

3. Compile
```sh
rollup -c
```


## Prerender (SSR) usage:

- Change `options.prerender` to `true` 
- Apply `rollup -c` => will created init.js inside `realese` folder
- apply `node init` => will created `prerender.html` in the same folder


## CLI

### `npm start`

Launch a dev server at `localhost:3000` and reload on file changes.

### `npm run build`

Build a production bundle in `release` folder.

### `npm run serve`

Serve production assets on localhost.

