
import React, { Component } from 'react';
import  Button  from '@mui/material';


class Score extends Component {

    constructor() {
        super();
        this.state = {
            score: 0
        }
    }

    static getDerivedStateFromProps = (props, state) => {
        console.log('getDerivedStateFromProps ' + state.score)

        return null;
    }


    // componentDidMount = () => {
    //     console.log('componenty did mount');



    shouldComponentUpdate = (nextProps, nextState) => {
        let output = false

        if (this.state.score < nextState.score) {
            output = true;
        }
        else {
            output = false;
        }
        console.log(output);
        return output;
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        alert('The output of the previous score is ' + prevState.score);

        return null;

    }

    componentDidUpdate = (prevProps, prevState) => {
        alert('The latest score is ' + this.state.score);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let keyIn = document.getElementById("result").value
        this.setState({
            score: keyIn
        });
        alert(' Submitted score: ' + keyIn)
    }

    render() {
        return (
            <div align='left'> <br></br>
                <label><b>Score Game</b></label>
                <br></br>
                <p>Current output {this.state.score}</p>
                <br></br>

                <form onSubmit={this.handleSubmit}>
                    <br></br>
                    <label>Update Score: </label><br></br>
                    <input type="number" id="result"></input>
                    <br></br><br></br>
                    <button>Enter</button>
                    <p> I tried my best :'(</p>
                      
                </form>
            </div>
        )
    }


}

export default Score;
