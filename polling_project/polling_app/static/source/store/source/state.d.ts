//@ts-check

// @ts-ignore
// import { useState } from 'react/hooks'

import type { StateUpdater } from 'preact/hooks'

type UseState = (<S>(initialState: S | (() => S)) => [S, StateUpdater<S>])

declare global {
	interface Store{

	}	
}


declare let globaState: <S>(initialState: S | (() => S)) => [S, StateUpdater<S>];

declare let states: object;

/**
 * @param {string | number} key
 * @param {any} value
 */
export function setState(key: string, value: unknown): void;

// export const useStateStore = (us) => (key, initValue) => useStore(key, initValue, us)


/**
 * @param {any} _useState
 */
export function useStateStore(_useState: UseState) : [unknown, StateUpdater<unknown>]


export function useStore<T extends keyof Store>(key: T, init_value?: T | (() => T), uState? : UseState) : [
	Store[T], 
	StateUpdater<Store[T]>
]	

/**
 * @param {string} key
 * @param {any} init_value
 * @param {Function} uState
 */
export function useStore<T>(key: string, init_value?: T | (() => T), uState? : UseState) : [T, StateUpdater<T>]



// export function useStore<T extends keyof Store>(key: T, init_value?: T | (() => T), uState? : UseState) : [
// 	Store[T], 
// 	StateUpdater<Store[T]>
// ]	

// export function useStore<Store>(key: keyof Store, init_value?: Store | (() => Store), uState? : UseState) : [
// 	Store[keyof Store], 
// 	StateUpdater<Store[keyof Store]>
// ]	

/**
 * @param {{ [x: string]: any; count?: number; }} init_dict
 */
export function initStore<T>(init_dict: T, _useState? : UseState): void;  // T extends Store