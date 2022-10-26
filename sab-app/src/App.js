import ApiData from './Components/ApiData.js';
import React, { Component } from 'react'
import axios from 'axios';
import Score from './Components/Score.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      arrData: [] //refer to line 24 and 43

    }

  }


  // componentDidMount = () => {
  //   axios.get('http://universities.hipolabs.com/search?country=United+States')
  //     .then((res) => {
  //       this.setState({
  //         arrData: res.data
  //       })

  //     }).catch(err => {
  //       console.log(err);

  //     });

  // }


  render() {
    return (
     
   
      
      <div>
      {/* Question 1: */}
        {/* <ApiData arrData={this.state.arrData} /> */}

        {/* Question 2: */}
        <Score />
      </div>
      
      

    )

  }

}

export default App;