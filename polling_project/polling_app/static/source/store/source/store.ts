//@ts-check

// @ts-ignore
// import { useState } from 'react/hooks'

import { useState } from 'preact/hooks'

let globaState = null;

let states = {};

/**
 * @param {string | number} key
 * @param {any} value
 */
export function setState(key, value){

	for (const hook of states[key].hooks) {
		
		// console.log(hook);
		hook(value)
	}
}

// export const useStateStore = (us) => (key, initValue) => useStore(key, initValue, us)

/**
 * @param {Function} _useState
 */
export function useStateStore(_useState: Function)
{
	return function(key: string, init_value)
	{
		return useStore(key, init_value, _useState)
	}
}

/**
 * @param {string} key
 * @param {any} init_value
 */
export function useStore(key, init_value, uState){

	const [value, setValue] = (uState || globaState || useState)(
		init_value !== undefined ? init_value : (states[key] || {}).initState
	)

	if (key in states){
		
		!~states[key].hooks.indexOf(setValue) && states[key].hooks.push(setValue);
	}
	else states[key] =  {
		hooks: [setValue],
		initState: init_value
	}
	
	return [value, setState.bind(null, key)]
}

/**
 * @param {{ [x: string]: any; count?: number; }} init_dict
 */
export function initStore(init_dict, _useState){

	for (const key in init_dict) {
		states[key] = {
			hooks: [],
			initState: init_dict[key]			
		}
	}

	globaState = _useState;
}