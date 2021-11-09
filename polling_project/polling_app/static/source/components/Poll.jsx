//@ts-check

import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import { useStore } from "../store/source/state";

import { Link } from 'preact-router/match';

//@ts-ignore
import style from "./style.css";

// const Poll = (props: { poll: { id: number, name: string } }) => {
const Poll = (props) => {


    // @ts-ignore
    return <>        
        <Link className={style.poll_href} href={`/polls/${props.poll.id}`}>
            <div class={style.poll}>
                <span>{props.poll.name}</span>
                <span style='float: right; color: gray'>{props.poll.length} questions</span>
            </div>
        </Link>
    </>
    
}

export default Poll