// @ts-ignore
import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useState } from 'preact/hooks'
// @ts-ignore
import style from './style.css';
// import './style.css';

// let r = '5'

// @ts-ignore
const Header = props => {

	// @ts-ignore
	const [r] = useState('cls')

	// console.log(style.header);

	//@ts-ignore
	return <header class={style.header}>
		<h1>Polls App</h1>
		<nav>
			<Link href="/">Polls</Link>
			<Link href="/results">Completed polls</Link>
			{/* <a href="/admin" target="_blank">Admin</a> */}
			{/* <Link href="/poll/:poll?">Poll</Link> */}
		</nav>
	</header>
}

export default Header;
