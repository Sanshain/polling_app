//@ts-check

import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { useStore } from "../store/source/state";

// @ts-ignore
import style from "./style.css";





const Polls = props => {

    const [results, setResults] = useState({});

    function onSubmit(event) {

        if (event.key && event.key != 'Enter') return;

        event.preventDefault()

        console.log(event);
        // @ts-ignore
        let v = document.querySelector('input[type="search"]').value;        
        if (!v || v.length < 2) return;

        fetch('/answer?s=' + v).then(r => r.ok ? r.json() : false).then(r => {

            setResults(r.reduce(function (acc, obj) {
                var key = obj.poll;
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(<li>
                    <h4>{obj.question}?</h4>
                    {
                        obj.options.length
                            ? <ul> {obj.options.map((o, i) => <li class={obj.value == i ? style.active : ''}>{o.value}</li>)} </ul>
                            : <p>{obj.value}</p>
                    }
                </li>);
                return acc;
            }, {}));

            // setResults(r);
        })
    }


    // @ts-ignore
    return <>
        <h1>Enter your info to know your results</h1>
        <form class={style.results_form}>
            <input type="search" placeholder="enter please your identifier id, e-mail or phone number to look up your results" onKeyDown={onSubmit} />
            <input type="submit" value='search' onClick={onSubmit} />
        </form>
        {
            Object.entries(results).map(([name, results], arr, answer) => <>                
                    <details>
                    <summary>{name}</summary>
                    <ul>
                        {results}
                    </ul>                        
                    </details>                
            </>)
        }
    </>
}

export default Polls