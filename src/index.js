import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {directors} from './director';


ReactDOM.render(
    <div>
        <Card id={directors[0].id} name={directors[0].name} birthname={directors[0].birthname} birthdate={directors[0].birthdate} birthplace={directors[0].birthplace}/>
        <Card id={directors[1].id} name={directors[1].name} birthname={directors[1].birthname} birthdate={directors[1].birthdate} birthplace={directors[1].birthplace}/>
        <Card id={directors[2].id} name={directors[2].name} birthname={directors[2].birthname} birthdate={directors[2].birthdate} birthplace={directors[2].birthplace}/>
        <Card id={directors[3].id} name={directors[3].name} birthname={directors[3].birthname} birthdate={directors[3].birthdate} birthplace={directors[3].birthplace}/>
        <Card id={directors[4].id} name={directors[4].name} birthname={directors[4].birthname} birthdate={directors[4].birthdate} birthplace={directors[4].birthplace}/>
        <Card id={directors[5].id} name={directors[5].name} birthname={directors[5].birthname} birthdate={directors[5].birthdate} birthplace={directors[5].birthplace}/>
        <Card id={directors[6].id} name={directors[6].name} birthname={directors[6].birthname} birthdate={directors[6].birthdate} birthplace={directors[6].birthplace}/>
        <Card id={directors[7].id} name={directors[7].name} birthname={directors[7].birthname} birthdate={directors[7].birthdate} birthplace={directors[7].birthplace}/>
        <Card id={directors[8].id} name={directors[8].name} birthname={directors[8].birthname} birthdate={directors[8].birthdate} birthplace={directors[8].birthplace}/>
        <Card id={directors[9].id} name={directors[9].name} birthname={directors[9].birthname} birthdate={directors[9].birthdate} birthplace={directors[9].birthplace}/>
        </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
