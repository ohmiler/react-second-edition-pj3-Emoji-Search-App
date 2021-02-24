import React, { Component } from 'react'
import './App.css'

// 1
import Header from "./Header";
// 2
import SearchInput from "./SearchInput";
// 3
import EmojiResults from "./EmojiResults";
import filterEmoji from './filterEmoji'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };

    this.handleSearchChange = (event) => {
      this.setState({
        filteredEmoji: filterEmoji(event.target.value, 20)
      });
    };
  }
  
  render() {
    return (
      <div className="container">
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    )
  }
}
