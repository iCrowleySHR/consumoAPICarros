import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import AdicionarVeiculo from './pages/addVeiculo'
import Error404 from './pages/error404'
import Documentacao from './pages/documentacao'
import AdicionarCombustivel from './pages/addCombustivel'
import AdicionarMarca from './pages/addMarca'
import AdicionarTransmissao from './pages/addTransmissao'
import AdicionarModelo from './pages/addModelo'

function App() {
  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/adicionar" element={<AdicionarVeiculo/>} />
          <Route path="/documentacao" element={<Documentacao/>} />
          <Route path="/adicionar-combustivel" element={<AdicionarCombustivel/>} />
          <Route path="/adicionar-marca" element={<AdicionarMarca/>} />
          <Route path="/adicionar-transmissao" element={<AdicionarTransmissao/>} />
          <Route path="/adicionar-modelo" element={<AdicionarModelo/>} />
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
