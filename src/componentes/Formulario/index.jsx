import { useState } from 'react'; // Importação correta do useState

import styles from './Formulario.module.css'

const Formulario = () => {
 const [altura, setAltura] = useState('');
 const [peso, setPeso] = useState('');


 const alturaMetros = Number(altura);
 const resultadoIMC = Number(peso) / (alturaMetros * alturaMetros);
 const exibeResultado = resultadoIMC.toFixed(1)

 const classificacaoIMC = () => {
  if (resultadoIMC < 18.5) {
   return <p>Seu IMC é: {exibeResultado}, e está abaixo do esperado! </p>

  } else if (resultadoIMC > 18.5 && resultadoIMC < 24.9) {
   return <p>Seu IMC é: {exibeResultado}, e está normal. </p>

  } else if (resultadoIMC > 25 && resultadoIMC < 29.9) {
   return <p>Seu IMC é: {exibeResultado}, e você está com sobrepeso.</p>

  } else if (resultadoIMC > 30 && resultadoIMC < 34.9) {
   return <p>Seu IMC é: {exibeResultado}, e você está com obesidade em 1º grau.</p>

  } else if (resultadoIMC > 35 && resultadoIMC < 39.9) {
   return <p>Seu IMC é: {exibeResultado}, e você está com obesidade em 2º grau.</p>

  } else {
   return <p>Seu IMC é: {exibeResultado}, e você está com obesidade em 3º grau.</p>

  }

 }

 const exibeMensagem = () => {
  if (exibeResultado >= 1) {
   return <p className={styles.resultado}>{classificacaoIMC()}</p>
  }
 }

 return (
  <>
   <form className={styles.form}>

    <h1 className={styles.titulo}>Calculadora de IMC</h1>
    <label>Insira sua altura (m):</label>
    <input type="number" placeholder='Exemplo: 1,75' pattern="..\\..*" onBlur={(e) => setAltura(e.target.value)} />

    <label>Insira seu peso (kg):</label>
    <input type="number" placeholder='Exemplo: 73' onBlur={(e) => setPeso(e.target.value)} />

    {exibeMensagem()}
   </form>

  </>
 );
};

export default Formulario;
