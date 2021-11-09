//@ts-check

import './style.css'

import { h, render } from 'preact'
import App from './App'

// import App from "./components/app";
// import App from './TSApp'

import { initStore } from "./store/source/state";

initStore({
	count: 9
})

// @ts-ignore
render(<App/>, document.getElementById('root'))
