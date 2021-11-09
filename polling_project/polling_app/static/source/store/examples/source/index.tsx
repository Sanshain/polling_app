//@ts-check

import './style.css'

import { h, render } from 'preact'
import App from './App'

// import App from "./components/app";
// import App from './TSApp'

import { initStore } from "../../source/state";

import { useState } from 'preact/hooks';


declare global{
	interface Store{
		count?: number,
		message?: string
	}
} 


initStore<Store>({
	count: 10
}, useState)

render(<App/>, document.getElementById('root'))
