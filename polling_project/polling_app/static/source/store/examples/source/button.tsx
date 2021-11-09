//@ts-check

import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { useStateStore, useStore } from "../../source/state";


declare interface Store{
	count?: number,
	message?: string
}


const Button = props => {

	const [text] = useState('minus')

	// const useStore = useStateStore(useState);
	
	// const [count, setCount] = useStore<number>('count')
	// const [count, setCount] = useStore<Store, 'count'>('count')
	// const [count, setCount] = useStore<Store>('count')
	const [count, setCount] = useStore('count')

	// const { dispatch, count } = useStoreon('count')

	return <>
		<hr/>
		<div>
			<button onClick={e => setCount(count - 1)}>{text} ({count})</button>
		</div>
	</>
}

export default Button