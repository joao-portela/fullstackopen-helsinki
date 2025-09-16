import { useState } from 'react'
import Button from './Button'
import Header from './Header'
import Exibir from './Exibir'

const Statistics = (props) => {
  return (
    <>
      <Header titulo={'statistics'}/>

      <Exibir feedback={'Good'} contador={props.good}/>
      <Exibir feedback={'Neutral'} contador={props.neutral}/>
      <Exibir feedback={'Bad'} contador={props.bad}/>
      <Exibir feedback={'Total'} contador={props.total}/>
      <Exibir feedback={'Média'} contador={props.media}/>
      <Exibir feedback={'Positivos'} contador={props.positivo + ' %'}/>
    </>
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