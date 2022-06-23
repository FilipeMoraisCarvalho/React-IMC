
import { useState } from 'react';
import styles from './App.module.css';
import powerImage from './assets/powered.png';
import {levels, calculateImc, Level } from './helpers/imc';
import { GridItem } from './components/GridItem';
import leftArrowImage from './assets/leftarrow.png';



const App = () => {

  const [heighField, setHeighField] = useState(0);
  const [weighField, setWeighField] = useState(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if (heighField && weighField){
      setToShow( calculateImc(heighField, weighField));
     

    }

    else alert('Digite todos os campos');
  }

  const handleBackButton = () => {
    setToShow(null);
    setWeighField(0);
    setHeighField(0);
    
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
            disabled={toShow ? true : false}
          />

          <input 
            placeholder='Digite o seu peso. Ex: 75.3 (em kg)' 
            type="number" 
            value={weighField > 0 ? weighField : ''} 
            onChange={e => setWeighField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false} >Calcular</button>
        </div>

        <div className={styles.rightSide}>
          {!toShow &&
          
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}/>
              ))}
            </div>
          }
        
        
          {toShow &&
            <div className={styles.righBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25}/>
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>


        
        
      </div>
        
    </div>
  );
}

export default App;