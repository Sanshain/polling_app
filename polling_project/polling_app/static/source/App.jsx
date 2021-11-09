//@ts-check

// @ts-ignore
import { h, Fragment } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import { Router } from 'preact-router';

import { styled, css, setup } from 'goober';
import { Link } from 'preact-router/match';

// @ts-ignore
import { useStore, initStore } from "./store/source/state";
import Button from "./button";
import Header from "./components/header";
import Polls from "./components/Polls";
import Results from "./components/Results";
import Question from "./components/Question";
import Contact from "./components/Contact";


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
	
	// @ts-ignore
	return <>
		<Link href='/'>
			<Header />
		</Link>
		<Router>
			<Polls path="/" />
			<Question path="/polls/:pollID" />
			<Contact path="/finish/:user_sign" />
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
