//@ts-check

import { h, Fragment, options } from 'preact';
import { route } from 'preact-router';
import { useEffect, useRef, useState } from 'preact/hooks'

import { useStore } from "../store/source/state";
//@ts-ignore
import style from "./style.css";

const Question = props => {

    const input = useRef(null);
    const [num, setNumber] = useState(0);    
    const [quests, setQuests] = useState([]);

    useEffect(() => {
        console.log(props);
        
        fetch('/questions/?poll=' + props.pollID).then(r => r.ok ? r.json() : null).then(r => {
            console.log(r);
            setQuests(r);
        })
    }, []);




    function submit() {
        
        let ta = document.querySelector('form textarea');

        // @ts-ignore
        let value = ta?.value || document.querySelector("input[type='radio']:checked")?.name;
        // @ts-ignore
        value = value || Array.from(document.querySelectorAll('input.checkbox:checked')).map(box => box.value).join(',');

        console.log(value);

        fetch('/answer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                // @ts-ignore
                'X-CSRFToken': document.getElementById('csrf_token').value
            },
            body: JSON.stringify({
                quest: quests[num].id + '',
                value: value,
                user_sign: props.user || null
            })
        }).then(r => r.ok ? r.json() : null).then(r => {
            console.log(r);
            if (ta) {
                // @ts-ignore
                ta.value = '';
                // @ts-ignore
                ta.focus()
            }
            props.user = r.user_sign;

            if (quests.length > num + 1) setNumber(num + 1);
            else {
                route('/finish/' + r.user_sign);
            }
        });
        
    }



    if (!quests.length) var currentQuest = <div style='text-align:center'>...</div>        
    else {
        
        let choices = (quests[num].kind == 1 || !quests[num].choices?.length) ? <textarea></textarea> : <div class={style.choices}>
            <li>
                {quests[num].choices.map((c, i, arr) => <div>
                    <input type={quests[num].kind == 2 ? "radio" : "checkbox"} name={i} id={i} />
                    <label htmlFor={i}>{c}</label>
                </div>)}
            </li>
        </div>
        
        var currentQuest = <div>
            <p>{quests[num].text}?</p>
            <form action=".">{choices}</form>
            <button onClick={submit}>{quests.length > num + 1 ? 'next' : 'finish'}</button>
        </div>
        
    }

    // @ts-ignore
    return <>
        <h1>Question {num + 1}/{quests.length}</h1>
        <div class={style.quest}>
            {currentQuest}
            {/* {quests.map((quest, i) =>
                <p>{quest.text}</p>
            )} */}            
        </div>
    </>
    
}

export default Question