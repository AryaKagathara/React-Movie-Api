import React, { Component } from "react";

import "./App.css";
import Lower from "./Components/Lower";
import Upper from "./Components/Upper";

import Axios from 'axios';
import Footer from "./Components/Footer";

import Key from './Export';

class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
      input: '',
      post: [],
    }
  }
  

  searchMe = () => {
    Axios.get(Key+ this.state.input)
    .then(res => {
      this.setState({ post: res.data })
    })
    .catch(err => console.log(err))
  }


  inputHandler = (e) => {
    this.setState({ input : e.target.value });
  }

  render() {
    return (
      <div>
        <section>
          <Upper inputHandler={this.inputHandler} searchMe={this.searchMe} />
          <Lower post={this.state.post}/>
          <Footer />
        </section>
      </div>
    );
  }
}

export default App;
