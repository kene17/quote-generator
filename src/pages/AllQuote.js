import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import QuoteList from '../components/quotes/QuoteList'
const DUMMY_QUOTES =[
    {id:'q1', author: 'kee', text:'Learning'},
    {id:'q2', author: 'ee', text:'Learninsnkxng'},
];

const AllQuote = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    )
}

export default AllQuote

