//@ts-check

// @ts-ignore
import { h, Fragment } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import { Router } from 'preact-router';

import { styled, css, setup } from 'goober';

// @ts-ignore
import { useStore, initStore } from "./store/source/state";
import Button from "./button";
import Header from "./components/header";
import Polls from "./components/Polls";
import Results from "./components/Results";
import Poll from "./components/Poll";

// @ts-ignore
import style from "./style.css";



setup(h);

const Title = styled("h1")`
  text-align: center;
  color: red;
`;

const BtnClassName = css`
  background-color: lightgray;
`;



// @ts-ignore
const App = props => {

	// const [message] = useState('Polling App')

	// const [count, setCount] = useStore('count')

	// const { dispatch, count } = useStoreon('count')

	useEffect(() => {
		document.title = props.title;
	}, [props.title]);
	
	// @ts-ignore
	return <>
		<Header />
		<Router>
			<Polls path="/" />
			<Poll path="/polls/:poll?" />
			<Results path="/results" />			
			{/* <Error type="404" default /> */}
		</Router>



{/* 
		<main className={BtnClassName}>
			<h1 className='title'>{message}</h1>
			<button onClick={(e) => setCount(count + 1)}>
				{count}
			</button>			
		</main>
		<Button />

		<Title>000</Title> */}
	</>
}

export default App
