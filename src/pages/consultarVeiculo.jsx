import Header from '../components/header'
import Footer from '../components/footer'

function consultarVeiculo() {
  return (
    <>
      <Header/>
        <main className='container'>
          <h1>consultarVeiculo</h1>
          <label>Veja as consultas que seu link pode gerar:</label>
          <input 
          className='form-control'
          type="text" />

          <label>Caso não saiba quais links digitar, vejas os links disponiveis aqui em baixo:</label>
          <select id="" className='form-select'>
            <option value=""></option>
          </select>
        </main>
      <Footer/>
    </>
  )
}

export default consultarVeiculo
