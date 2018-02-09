import React, { Component } from 'react';
import './App.css';
import {ShoppingList, Square, Home, About} from "./components";

export default class App extends Component {
    render() {
        return ([
                <Home align={"left"} color={"yellow"}/>,
                <Square value={"My Button"}/>,
                <ShoppingList name={"a"}/>,
        ]);
    }
}