//@ts-check

import { h, Fragment } from 'preact'
import { route } from 'preact-router';
import { useState } from 'preact/hooks'

import { useStore } from "../store/source/state";
// @ts-ignore
import style from "./style.css";

const Contact = props => {

    function onFinish(params) {

        // @ts-ignore
        let v = document.querySelector('input[type="text"]').value;
        if (!v || v.length < 2) {
            if (!confirm("Cлишком короткий контакт. Нужно минимум 3 символа. Вы уверены, что не хотите оставлять о себе данные?")) return;
        }

        fetch('/user_sign/' + props.user_sign, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                // @ts-ignore
                'X-CSRFToken': document.getElementById('csrf_token').value
            },
            body: JSON.stringify({
                id: props.user_sign,
                // @ts-ignore
                [~v.indexOf('@') ? 'email' : 'phone']: v
            })
        }).then(r => r.ok ? r.json() : false).then(r => {
            
            route('/');
        })        
    }

    // @ts-ignore
    return <div class={style.finish}>
        <h3>Thank you! Your identifier id is {props.user_sign}</h3>
        <h4>Enter your additional contact information for (as you want)</h4>
        <div>
            <input type="text" placehoder='phone or e-mail' />
            <button onClick={onFinish}>OK</button>
        </div>
    </div>
}

export default Contact