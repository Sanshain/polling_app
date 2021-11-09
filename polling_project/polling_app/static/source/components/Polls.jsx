//@ts-check

import { h, Fragment } from 'preact'
import { useEffect, useState } from 'preact/hooks'
// import type { PollInfo } from './global';

import { useStore } from "../store/source/state";
import Poll from "./Poll";


const Polls = props => {    
    
    // const [polls, setData] = useState < { id: number, name: string }[] > ([]);
    const [polls, setData] = useState([]);

    // const [count, setCount] = useStore('count', 0)

    useEffect(() => {        
        fetch('polls').then(r => r.ok ? r.json() : null).then(r => {
            console.log(r);
            setData(r);
        })
    }, []);

    // @ts-ignore
    return <>
        <h1>Select the survey you want to take:</h1>
        <div>
            {polls.map((poll, i) => <Poll poll={poll} />)}
        </div>
    </>
}

export default Polls