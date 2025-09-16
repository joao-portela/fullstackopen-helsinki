import { useState } from 'react'
import Exibir from "./Exibir"
import Button from "./Button"

const Historico = (props) => {  
  if (props.todosOsCliques.length === 0) {    
    return (      
      <div>        
        Clique em um dos botões para usar a aplicação!      
      </div>    
    )  
  }  
    return (    
      <div>      
      Histórico de cliques nos botões: {props.todosOsCliques.join(' ')}    
      </div>  
    )
}

const App = () => {
  const [esquerda, setEsquerda] = useState(0)
  const [direita, setDireita] = useState(0)
  const [todosOsCliques, setTodos] = useState([])

  const [total, setTotal] = useState(0)

  const handleCliqueEsquerda = () => {
    setTodos(todosOsCliques.concat('E'))
    const atualizaEsquerda = esquerda + 1
    setEsquerda(atualizaEsquerda)
    setTotal(atualizaEsquerda + direita)
  }

  const handleCliqueDireita = () => {
    setDireita(direita + 1)

    setTotal(esquerda + direita)
  }

  return (
    <div>
      {esquerda}
      <button onClick={handleCliqueEsquerda}>Esquerda</button>
      <button onClick={handleCliqueDireita}>Direita</button>
      <p>{todosOsCliques.join(' ')}</p>

      <p>Total {total}</p>
    </div>
  )
}


export default App