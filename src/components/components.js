import React, {Component} from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'

export class ShoppingList extends Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

export class Square extends Component {
    render() {
        return (
            <div>
                <Home align={"left"} color={"red"}/>
                <button className="square" onClick={()=> this.showAlert()}>
                    {this.props.value}
                </button>
                <About color={"blue"}/>
            </div>
        )
    }

    showAlert () {
        alert(this.props.value)
    }
}

export const Home = (props) => (
    <div align={props.align} style={{backgroundColor: props.color}}>
        <marquee>Home</marquee>
    </div>
)

export class About extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: 'visible'};
    }

    render() {
        return (
            <div style={{backgroundColor: this.props.color ,visibility: this.state.showText}}>
                <marquee direction="right">About</marquee>
            </div>
        )
    }
}

export const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)