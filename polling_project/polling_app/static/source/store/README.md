# react-store

Tiny state manager for react/preact programming infrastructure
- Based on react/hooks module
- compact: 
  - less then 500 bytes for preact (minified)
  - less then 10kb for react (minified)
- understandable API (like react/hooks)
  
  
 ## get started: 
 
```
npm install https://github.com/Sanshain/react-store.git
```

## Usage:

Default state initialization:

```
import { initStore } from "states";

initStore({
	count: 9
})
```

Local state initialization: 

```js
import { useStore } from "states";
const [count, setCount] = useStore('count')
```

State update:

```jsx
const [count, setCount] = useStore('count')
//...
<button onClick={(e) => setCount(count + 1)}>
//...
```

## Example:

index.js:

```js
import { h, render } from 'preact'
import App from './App'

import { initStore } from "./store/state";

initStore({
	count: 9
})

render(<App/>, document.getElementById('root'))
```

App.jsx:

```js
import { h, Fragment } from 'preact' 
import { useState } from 'preact/hooks'

import { useStore, initStore } from "./store/state";
import Button from "./button";

const App = props => {

	const [message] = useState('Preact App')

	const [count, setCount] = useStore('count')

	return <>
		<header />
		<main class={BtnClassName}>
			<h1 class='title'>{message}</h1>
			<button onClick={(e) => setCount(count + 1)}>
				{count}
			</button>
		</main>
		<Button />		
	</>
}

export default App
```

button.jsx:

```jsx
import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { useStore } from "./store/state";

const Button = props => {

	const [text] = useState('minus')
	const [count, setCount] = useStore('count', 0)

	return <>
		<hr/>
		<div>
			<button onClick={e => setCount(count - 1)}>{text} ({count})</button>
		</div>
	</>
}

export default Button
```
 
Look live example   [here](https://sanshain.github.io/react-store/examples/index.html)
