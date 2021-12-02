import { Component } from "react";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateQuantityFeedbeacks = (e) => {
    const key = e.target.id;
    this.setState((ps) => ({ [key]: ps[key] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { updateQuantityFeedbeacks } = this;

    return (
      <div>
        <Section title="Please leave feedbeack">
          <FeedbackOptions
            options={this.state}
            onLeaveFeeeddback={updateQuantityFeedbeacks}
          />
        </Section>

        <Section title="Statistics">
          <span>Good:{good}</span>
          <span>Neutral:{neutral}</span>
          <span>Bad:{bad}</span>
        </Section>
      </div>
    );
  }
}
export default App;
