//@ts-check

import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { useStore } from "../store/source/state";

const Polls = props => {



    const [text] = useState('minus')

    const [count, setCount] = useStore('count', 0)


    // @ts-ignore
    return <>
        <h1>Polls</h1>
        <div>
            <span>some results</span>
        </div>
    </>
}

export default Polls