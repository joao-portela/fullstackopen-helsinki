import { useState } from 'react'
import Button from './Button'
import Header from './Header'
import Exibir from './Exibir'

const StatisticsLine = (props) => {
  return (
    <>
      <div>{props.text} {props.value}</div>
    </>
  )
}

const Statistics = (props) => {
  if (props.good != 0 || props.neutral != 0 || props.bad != 0 ) {
    return (
      <>
        <Header titulo={'statistics'}/>

        <StatisticsLine text={'Good'} value={props.good}/>
        <StatisticsLine text={'Neutral'} value={props.neutral}/>
        <StatisticsLine text={'Bad'} value={props.bad}/>
        <StatisticsLine text={'Total'} value={props.total}/>
        <StatisticsLine text={'Média'} value={props.media}/>
        <StatisticsLine text={'Positivos'} value={props.positivo + ' %'}/>
      </>
    )
  }

  return (
     <h3>Não há nenhum feedback ainda</h3>
  )
}

const App = () => {
  // salve os cliques de cada botão em seu próprio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [media, setMedia] = useState(0)
  const [positivo, setPositivo] = useState(0)


  const avaliarClique = (feedback) => {
    let atualGood = good;
    let atualNeutral = neutral;
    let atualBad = bad;
    let atualTotal = total;

    if (feedback === 'good') {
      atualGood = good + 1;
      setGood(atualGood);
    } else if (feedback === 'neutral') {
      atualNeutral = neutral + 1;
      setNeutral(atualNeutral);
    } else {
      atualBad = bad + 1;
      setBad(atualBad);
    }
    atualTotal = total + 1;
    setTotal(atualTotal);

    // Calcula média e positivos usando os valores locais
    const media = (atualGood + atualNeutral + atualBad) / atualTotal;
    setMedia(media);

    const porcentagem = atualTotal === 0 ? 0 : (atualGood / atualTotal) * 100;
    setPositivo(porcentagem);
  }

  return (
    <div>
      <Header titulo={'give feedback'}/>

      <Button onClick={() => avaliarClique('good')} texto={'good'}/>
      <Button onClick={() =>avaliarClique('neutral')} texto={'neutral'}/>
      <Button onClick={() => avaliarClique('bad')} texto={'bad'}/>

      <Statistics good={good} neutral={neutral} bad={bad} media={media} total={total} positivo={positivo} />
      
    </div>
  )
}

export default App