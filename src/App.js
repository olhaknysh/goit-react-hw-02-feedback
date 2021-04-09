import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statictics from './components/Statictics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback() {
    const values = Object.values(this.state);
    return values.reduce((sum, number) => {
      sum += number;
      return sum;
    }, 0);
  }

  countPositiveFeedback(total, good) {
    return Number.parseInt((good * 100) / total);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedback(totalFeedbacks, good);

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.addFeedback}
        />

        <Section title="Statictics" />
        {totalFeedbacks === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statictics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    );
  }
}

export default App;
