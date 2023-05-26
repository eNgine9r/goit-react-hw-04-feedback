import { useState } from 'react';
import css from './Feedback.module.css';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

export default function Feedback() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGetFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positive = good;
    return total > 0 ? Math.round((positive / total) * 100) : 0;
  };

    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();
    
    return (
      <div className={css.conteiner}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={onGetFeedback}
            options={Object.keys({good, neutral, bad})}
          />
          <p>Positive feedback: {positivePercentage} %</p>
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              options={{ good, neutral, bad }}
              total={total}
            />
          ) : (
            <Notification message="There is no feedback" />)}
        </Section>
      </div>
    )
  }


