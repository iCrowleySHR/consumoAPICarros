import Header from '../components/header'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../styles/documentacao.css'
import { fetchCarro, fetchTransmissao, fetchMarcas, fetchModelo, fetchCombustiveis } from '../utils/FuncoesAPI'
import React, { useState, useEffect } from 'react';
import CodeToggle from '../components/codeToggle';
import ScrollReveal from 'scrollreveal'

function documentacao() {
  useEffect(() => {
    ScrollReveal().reveal('.container', {
      delay: 100,
      rotate: {
        x: 0,
        y: 10,
        z: 10
      }
    });
  }, []);

  const [carro, setCarro] = useState([]);
  useEffect(() => {
    fetchCarro().then(dadosAPI => {
      setCarro(dadosAPI);
    });
  }, []);

  const [transmissao, setTransmissao] = useState([]);
  useEffect(() => {
    fetchTransmissao().then(dadosAPI => {
      setTransmissao(dadosAPI);
    });
  }, []);

  const [marca, setMarca] = useState([]);
  useEffect(() => {
    fetchMarcas().then(dadosAPI => {
      setMarca(dadosAPI);
    });
  }, []);

  const [modelo, setModelo] = useState([]);
  useEffect(() => {
    fetchModelo().then(dadosAPI => {
      setModelo(dadosAPI);
    });
  }, []);

  const [combustivel, setCombustivel] = useState([]);
  useEffect(() => {
    fetchCombustiveis().then(dadosAPI => {
      setCombustivel(dadosAPI);
    });
  }, []);


  return (
    <>
      <Header />
      <main className='container main-documentacao pt-3 table-responsive'>
        <section>
          <h1 className='text-effect'>Documentação</h1>
          <p>Acompanhe aqui toda a documentação do projeto, e como integrar esse sistema na sua aplicação!</p>
        </section>

        <section className='section-documentacao '>
          <article>
            <h3 className='mt-5'>Como fazer consulta de veículos?</h3>
            <div className="table-responsive text-start">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="table-light">GET</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th>
                      <p>
                        Realize uma requisição para esta URL para obter a lista de veículos disponíveis.
                      </p>
                    </th>
                  </tr>
                  <tr>
                    <th>https://gustavosachettoapi.000webhostapp.com/api/v1/cars</th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-responsive text-start">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col" className="table-light">GET</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th>
                      <p>
                        Utilize o parâmetro <b>page</b> para navegar pelas diferentes páginas da lista de veículos.
                      </p>
                    </th>
                  </tr>
                  <tr>
                    <th>https://gustavosachettoapi.000webhostapp.com/api/v1/cars?page=7</th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="table-responsive text-start">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th scope="col" className="table-light">GET</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th>
                      <p>
                        Insira o ID do veículo após a barra para obter informações específicas sobre um veículo.
                      </p>
                    </th>
                  </tr>
                  <tr>
                    <th>https://gustavosachettoapi.000webhostapp.com/api/v1/cars/2</th>
                  </tr>
                </tbody>
              </table>
              </div>
              <label>Exemplo do arquivo JSON:</label>
                <CodeToggle codeId="code1">
                  <pre>
                    <div className='text-start'>{JSON.stringify(carro, null, 2)}</div>
                  </pre>
                </CodeToggle>
          </article>
        </section>

      <section>
        <article>
          <h3 className='mt-5'>Como fazer consulta de transmissões?</h3>
          <div className="table-responsive text-start">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col" className="table-light">GET</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th>
                    <p>
                      Realize uma requisição para esta URL para obter a lista de transmissões disponíveis.
                    </p>
                  </th>
                </tr>
                <tr>
                  <th>https://gustavosachettoapi.000webhostapp.com/api/v1/transmissions</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-responsive text-start">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col" className="table-light">GET</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th>
                    <p>
                      Insira o ID do veículo após a barra para obter informações específicas sobre uma transmissão.
                    </p>
                  </th>
                </tr>
                <tr>
                  <th>https://gustavosachettoapi.000webhostapp.com/api/v1/transmissions/4</th>
                </tr>
              </tbody>
            </table>
          </div>
          <label>Exemplo do arquivo JSON:</label>
            <CodeToggle codeId="code1">
              <pre>
                <div className='text-start'>{JSON.stringify(transmissao, null, 2)}</div>
              </pre>
            </CodeToggle>
        </article>
      </section>

      <section>
        <article>
          <h3 className='mt-5'>Como fazer consulta de marcas?</h3>
          <div className="table-responsive text-start">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col" className="table-light">GET</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th>
                    <p>
                      Realize uma requisição para esta URL para obter a lista de marcas disponíveis.
                    </p>
                  </th>
                </tr>
                <tr>
                  <th>https://gustavosachettoapi.000webhostapp.com/api/v1/brands</th>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-responsive text-start">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col" className="table-light">GET</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th>
                    <p>
                      Insira o ID do veículo após a barra para obter informações específicas sobre uma marca.
                    </p>
                  </th>
                </tr>
                <tr>
                  <th>https://gustavosachettoapi.000webhostapp.com/api/v1/brands/13</th>
                </tr>
              </tbody>
            </table>
          </div>
          <label>Exemplo do arquivo JSON:</label>
            <CodeToggle codeId="code1">
              <pre>
                <div className='text-start'>{JSON.stringify(marca, null, 2)}</div>
              </pre>
            </CodeToggle>
        </article>
      </section>

      <section>
        <article>
          <h3 className='mt-5'>Como fazer consulta de modelos?</h3>
          <div className="table-responsive text-start">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col" className="table-light">GET</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th>
                    <p>
                      Realize uma requisição para esta URL para obter a lista de modelos disponíveis.
                    </p>
                  </th>
                </tr>
                <tr>
                  <th>https://gustavosachettoapi.000webhostapp.com/api/v1/carmodels</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-responsive text-start">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col" className="table-light">GET</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th>
                    <p>
                      Insira o ID do veículo após a barra para obter informações específicas sobre uma modelo.
                    </p>
                  </th>
                </tr>
                <tr>
                  <th>https://gustavosachettoapi.000webhostapp.com/api/v1/carmodels/13</th>
                </tr>
              </tbody>
            </table>
          </div>
          <label>Exemplo do arquivo JSON:</label>
            <CodeToggle codeId="code1" >
              <pre>
                <div className='text-start'>{JSON.stringify(modelo, null, 2)}</div>
              </pre>
            </CodeToggle>
        </article>
      </section>

      <section>
        <article>
          <h3 className='mt-5'>Como fazer consulta de combustiveis?</h3>
          <div className="table-responsive text-start">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col" className="table-light">GET</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th>
                    <p>
                      Realize uma requisição para esta URL para obter a lista de combustiveis disponíveis.
                    </p>
                  </th>
                </tr>
                <tr>
                  <th>https://gustavosachettoapi.000webhostapp.com/api/v1/fuels</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-responsive text-start">
            <table className="table table-sm">
              <thead>
                <tr>
                  <th scope="col" className="table-light">GET</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th>
                    <p>
                      Insira o ID do veículo após a barra para obter informações específicas sobre um combustivel.
                    </p>
                  </th>
                </tr>
                <tr>
                  <th>https://gustavosachettoapi.000webhostapp.com/api/v1/fuels/2</th>
                </tr>
              </tbody>
            </table>
          </div>
          <label>Exemplo do arquivo JSON:</label>
            <CodeToggle codeId="code1" >
                <div className='text-start'>{JSON.stringify(combustivel, null, 2)}</div>
            </CodeToggle>
        </article>
      </section>
    </main >
      <Footer />
    </>
  )
}

export default documentacao
