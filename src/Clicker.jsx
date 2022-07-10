import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick () {
        let rand = Math.floor(Math.random() * 10) + 1
        this.setState({num: rand})
    }
    render() {
        return (
            <div>
                <h1>Number is: {this.state.num}</h1>
                {this.state.num === 7 
                ? <h2>YOU WIN!!!</h2>
                : <button onClick={this.handleClick}>Random Number</button>
                }
            </div>
        )
    }
}

export default Clicker