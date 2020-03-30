import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = props => <h1>{props.name}</h1>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ text, number, symbol }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>
        {number} {symbol}
      </td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [sum, setSum] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
    setTotal(total + 1);
    setSum(sum + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setTotal(total + 1);
    setSum(sum + 0);
  };

  const handelBadClick = () => {
    setBad(bad + 1);
    setTotal(total + 1);
    setSum(sum - 1);
  };

  if (total < 1) {
    return (
      <div>
        <Header name="give feedback" />
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handelBadClick} text="bad" />
        <Header name="statistics" />
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <Header name="give feedback" />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handelBadClick} text="bad" />
      <Header name="statistics" />
      <table>
        <tbody>
          <Statistics text="good" number={good} />
          <Statistics text="neutral" number={neutral} />
          <Statistics text="bad" number={bad} />
          <Statistics text="all" number={total} />
          <Statistics text="average" number={sum / total} />
          <Statistics text="positive" number={(good / total) * 100} symbol="%" />
        </tbody>
      </table>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
