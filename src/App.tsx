
import { useState } from 'react';
import styles from './App.module.css';
import powerImage from './assets/powered.png';
import {levels, calculateImc} from './helpers/imc';
import { GridItem } from './components/GridItem';



const App = () => {

  const [heighField, setHeighField] = useState(0);
  const [weighField, setWeighField] = useState(0);

  const handleCalculateButton = () => {
    if (heighField && weighField){


    }

    else alert('Digite todos os campos');
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powerImage} alt="" width={150} />
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          
          <input 
            placeholder='Digite a sua altura. Ex: 1.5 (em métros)' 
            type="number" 
            value={heighField > 0 ? heighField : ''} 
            onChange={e => setHeighField(parseFloat(e.target.value))}
          />

          <input 
            placeholder='Digite o seu peso. Ex: 75.3 (em kg)' 
            type="number" 
            value={weighField > 0 ? weighField : ''} 
            onChange={e => setWeighField(parseFloat(e.target.value))} 
          />

          <button onClick={handleCalculateButton} >Calcular</button>
        </div>

        <div className={styles.rightSide}>
          <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item}/>
            ))}
          </div>

        </div>
        
      </div>
        
    </div>
  );
}

export default App;