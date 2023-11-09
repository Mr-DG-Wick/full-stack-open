import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};


const Statistics = ({reviews}) => {
  const [good, neutral, bad] = reviews
  const tot = good + neutral + bad
  const avg = ((good - bad)/tot)
  const perPositive = (good/tot)*100

  if (tot == 0) {
    return (
      <p>No feeback given</p>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <StatisticLine text={"good"} value={good}/>
      <StatisticLine text={"neutral"} value={neutral}/>
      <StatisticLine text={"bad"} value={bad}/>
      <StatisticLine text={"all"} value={tot}/>
      <StatisticLine text={"average"} value={avg}/>
      <StatisticLine text={"positive"} value={perPositive}/>
    </div>
  )
}

const Button = ({setReview, text}) => {
  return (
    <button onClick={setReview}>{text}</button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = () => setGood(good + 1)
  const updateNeutral = () => setNeutral(neutral + 1)
  const updateBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <Button setReview={updateGood} text={"good"}/>
      <Button setReview={updateNeutral} text={"neutral"}/>
      <Button setReview={updateBad} text={"bad"}/>

      <Statistics reviews={[good,neutral,bad]}/>
    </div>
  )
}

export default App