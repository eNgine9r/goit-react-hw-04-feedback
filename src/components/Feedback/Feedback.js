import React from "react";
import css from './Feedback.module.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

class Feedback extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = (feedbackType) => {
    this.setState(prevState => {
      return {
        [feedbackType]: prevState[feedbackType] + 1,
      }
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return (total += value);
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = this.state.good;
    return total > 0 ? Math.round((positive / total) * 100) : 0;
  };

  render() {
    const options = Object.keys(this.state);
    const names = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    return (
      <div className={css.conteiner}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              names={names}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />)}
        </Section>
      </div>
    )
  }
}

export default Feedback;