import React, { Component } from "react";
import Champions from "./components/Champions";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import championsList from "./championsList.json";


class App extends Component {
  // Setting this.state.championsList to the championsList json array
  state = {
    championsList,
    count: 0,
    topCount: 0,
    message: "Click on a card to earn points, but don't click on any more than once!",
    textcolor: { color: 'black' },
    guesses: []
  };

  shuffleChampions = () => {
    const championsList = this.state.championsList.sort(function (a, b) { return 0.5 - Math.random() });;
    // Set this.state.championsList equal to the new championsList array
    this.setState({ championsList });
  };

  scoreCount = guess => {
    if (this.state.guesses.indexOf(guess) === -1) {
      this.state.guesses.push(guess);
      this.setState({ count: this.state.count + 1 });
      this.setState({ message: "You guessed correctly!" });
      this.setState({ textcolor: { color: "#006400" } });
    } else {
      this.setState({ count: 0 });
      this.setState({ guesses: [] });
      this.setState({ message: "You guessed incorrectly!" });
      this.setState({ textcolor: { color: "Red" } });
      if (this.state.count > this.state.topCount) {
        this.setState({ topCount: this.state.count });
      }
    }
    this.shuffleChampions();
  };

  // Map over this.state.championsList and render a championsList component for each championsList object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game!</Title>
        <Score
          count={this.state.count}
          topCount={this.state.topCount}
          message={this.state.message}
          text={this.state.textcolor}
        />
        {this.state.championsList.map(championsList => (
          <Champions
            scoreCount={this.scoreCount}
            id={championsList.id}
            key={championsList.id}
            // name={championsList.name}
            image={championsList.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;