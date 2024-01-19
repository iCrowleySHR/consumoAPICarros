import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home'
import AdicionarVeiculo from './pages/addVeiculo'
import CosultarVeiculo from './pages/consultarVeiculo'
import Error404 from './pages/error404'
import Documentacao from './pages/documentacao'


function App() {
  return (
    <>      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/adicionar" element={<AdicionarVeiculo/>} />
          <Route path="/consulta" element={<CosultarVeiculo/>} />
          <Route path="/documentacao" element={<Documentacao/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
